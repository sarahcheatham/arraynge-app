import React, { Component } from 'react';
import StudentList from "./StudentList";
import { Table, thead, tr } from 'react-bootstrap';

class Secret extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: "",
            userId: "",
            students: [],
            lastPost: {
                subject: "",
                gradelevel: ""
            }
        };
    }

    componentDidMount(){
        fetch("/api/hey").then((res)=>{
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
        fetch("/api/secret").then((res)=>{
            return res.text();
        }).then((data)=>{
            this.setState({
                message: data
            });
        });
        fetch("/api/classdata").then((res)=>{
            return res.json()
        }).then((data)=>{
            const classdata = data.slice();
            const lastPost = classdata.splice(-1)[0];
            if(lastPost.userId = this.state.userId){
                this.setState({lastPost: lastPost, gradelevel: lastPost.gradelevel, subject: lastPost.subject})
            }  
        })
        fetch("/api/studentdata").then((res)=>{
            return res.json()
        }).then((studentdata)=>{
            this.setState({students: studentdata})
        })
    }
    render(){
        const students = this.state.students.slice();
        let studentList = [];
        let studentComponents =[];
        students.map((item, index)=>{
            if(item.userId === this.state.userId || item.subject === this.state.lastPost.subject){
                studentList.push(item)
            }
        })
        studentList.forEach((student, index)=>{
            const name = student.name;
            const BOYscore = student.score[0].BOYscore;
            const EOYgoal = student.score[1].EOYgoal;
            const MOYscore = student.score[2].MOYscore;
            const EOYscore = student.score[3].EOYscore;
            let sc = <StudentList key={index} firstName={name} BOYscore={BOYscore} EOYgoal={EOYgoal} MOYscore={MOYscore} EOYscore={EOYscore}/>
            studentComponents.push(sc)
        })
        console.log(studentComponents)
        return(
            <div>
                <h2 className="secretgradelevel">{this.state.gradelevel}</h2>
                <form>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th className="tableheader">Student Name:</th>
                            <th className="tableheader">BOY Score:</th>
                            <th className="tableheader">EOY Goal:</th>
                            <th className="tableheader">MOY Score:</th>
                            <th className="tableheader">EOY Score:</th>
                        </tr>
                    </thead>
                    {studentComponents}
                </Table>
                </form>
            </div>
        );
    }
}

export default Secret;