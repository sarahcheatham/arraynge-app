import React, { Component } from 'react';
import StudentUpdateForm from "./StudentUpdateForm";
import StudentUpdateTable from "./StudentUpdateTable";
import { Grid, Row, Col, Button, Table, thead, tr } from 'react-bootstrap';
import './ScoresPage.css';

class ScoresPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: "",
            save: {},
            isEdit: false,
            userId: "",
            id: "",
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
        fetch("/api/scores").then((res)=>{
            console.log("scores fetch:", res)
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
            console.log(this.state.students)
        })
    }
    handleEdit(event){
        event.preventDefault();
        this.setState({isEdit: !this.state.isEdit})
        if(this.state.isEdit === true){
            fetch("/api/studentdata").then((res)=>{
                return res.json()
            }).then((studentdata)=>{
                this.setState({students: studentdata})
            })
        }
    }

    handleSubmit(studentdata){
        const id = studentdata.id;
        const name = studentdata.name;
        const score = studentdata.score;
        const userId = studentdata.userId;
        const gradelevel = studentdata.gradelevel;
        const subject = studentdata.subject;
        let options = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, score, userId, gradelevel, subject})
        }
        fetch(`/api/studentdata/${id}`, options).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log("response:", res)
        }).catch((err)=>{
            console.log("error:", err)
        })
    }

    render(){
        const students = this.state.students.slice();
        let formOrTable = "";
        let buttonText = ""
        let studentList = [];
        let formComponents =[];
        let tableComponents = [];
        students.map((item, index)=>{
            if(item.userId === this.state.userId || item.subject === this.state.lastPost.subject){
                studentList.push(item)
            }
        })
        studentList.forEach((student, index)=>{
            const id = student._id;
            const name = student.name;
            const subject = student.subject;
            const BOYscore = student.score[0].BOYscore;
            const EOYgoal = student.score[1].EOYgoal;
            const MOYscore = student.score[2].MOYscore;
            const EOYscore = student.score[3].EOYscore;
            let sc = <StudentUpdateForm key={index} id={id} name={name} subject={subject} BOYscore={BOYscore} EOYgoal={EOYgoal} MOYscore={MOYscore} EOYscore={EOYscore} onFormSubmit={this.handleSubmit}/>
            formComponents.push(sc)
        })
        studentList.forEach((student, index)=>{
            const id = student._id;
            const name = student.name;
            const subject = student.subject;
            const BOYscore = student.score[0].BOYscore;
            const EOYgoal = student.score[1].EOYgoal;
            const MOYscore = student.score[2].MOYscore;
            const EOYscore = student.score[3].EOYscore;
            let sc = <StudentUpdateTable key={index} id={id} name={name} subject={subject} BOYscore={BOYscore} EOYgoal={EOYgoal} MOYscore={MOYscore} EOYscore={EOYscore}/>
            tableComponents.push(sc)
        })
        if(this.state.isEdit === true){
            formOrTable = formComponents;
            buttonText = "Save Scores"
        } else {
            formOrTable = tableComponents;
            buttonText = "Edit Scores"
        }
        return(
            <div className="secretpage">
                <div className="secretgradeandbutton">
                    <h2 className="secretgradelevel">{this.state.gradelevel}</h2>
                    <Button className="editbutton" onClick={this.handleEdit}>{buttonText}</Button>
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
                            <th className="tableheader" id="EOY">EOY Score:</th>
                        </tr>
                    </thead>
                    {formOrTable}
                </Table>
                </form>
            </div>
        );
    }
}

export default ScoresPage;