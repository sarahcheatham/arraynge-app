import React, { Component } from 'react';
import StudentUpdateForm from "./StudentUpdateForm";
import StudentUpdateTable from "./StudentUpdateTable";
import { Grid, Row, Col, Button, Table, thead, tr } from 'react-bootstrap';

class Secret extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: "",
            isEdit: false,
            userId: "",
            students: [],
            lastPost: {
                subject: "",
                gradelevel: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
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
    handleEdit(event){
        event.preventDefault();
        this.setState({isEdit: !this.state.isEdit})
        console.log(this.state.isEdit)
    }

    handleSubmit(studentdata){
        this.setState({
            name: studentdata.name,
            score: studentdata.score,
            userId: studentdata.userId
        })
        const name = studentdata.name;
        const score = studentdata.score;
        const userId = studentdata.userId;
        const gradelevel = this.state.lastPost.gradelevel;
        const subject = this.state.lastPost.subject;
        console.log(name, score, userId, gradelevel, subject)

        let options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({userId, name, gradelevel, subject, score})
        }
        fetch("/api/studentdata/:id", options).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        const students = this.state.students.slice();
        let formOrTable = "";
        let studentList = [];
        let formComponents =[];
        let tableComponents = [];
        students.map((item, index)=>{
            if(item.userId === this.state.userId || item.subject === this.state.lastPost.subject){
                studentList.push(item)
            }
        })
        studentList.forEach((student, index)=>{
            const name = student.name;
            const subject = student.subject;
            const BOYscore = student.score[0].BOYscore;
            const EOYgoal = student.score[1].EOYgoal;
            const MOYscore = student.score[2].MOYscore;
            const EOYscore = student.score[3].EOYscore;
            let sc = <StudentUpdateForm key={index} name={name} subject={subject} BOYscore={BOYscore} EOYgoal={EOYgoal} MOYscore={MOYscore} EOYscore={EOYscore} onEdit={this.handleEdit} onFormSubmit={this.handleSubmit}/>
            formComponents.push(sc)
        })
        studentList.forEach((student, index)=>{
            const name = student.name;
            const subject = student.subject;
            const BOYscore = student.score[0].BOYscore;
            const EOYgoal = student.score[1].EOYgoal;
            const MOYscore = student.score[2].MOYscore;
            const EOYscore = student.score[3].EOYscore;
            let sc = <StudentUpdateTable key={index} name={name} subject={subject} BOYscore={BOYscore} EOYgoal={EOYgoal} MOYscore={MOYscore} EOYscore={EOYscore}/>
            tableComponents.push(sc)
        })
        if(this.state.isEdit === true){
            formOrTable = formComponents;
        } else {
            formOrTable = tableComponents;
        }
        return(
            <div className="secretpage">
                <div className="secretgradeandbutton">
                    <h2 className="secretgradelevel">{this.state.gradelevel}</h2>
                    <Button className="editbutton" onClick={this.handleEdit}>Edit Scores</Button>
                </div>
                <form>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th className="tableheader">Student Name:</th>
                            <th className="tableheader">Subject:</th>
                            <th className="tableheader">BOY Score:</th>
                            <th className="tableheader">EOY Goal:</th>
                            <th className="tableheader">MOY Score:</th>
                            <th className="tableheader">EOY Score:</th>
                        </tr>
                    </thead>
                    {formOrTable}
                </Table>
                </form>
            </div>
        );
    }
}

export default Secret;