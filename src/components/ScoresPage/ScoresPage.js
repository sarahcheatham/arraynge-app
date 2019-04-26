import React, { Component } from 'react';
import StudentUpdateForm from "./StudentUpdateForm";
import StudentUpdateTable from "./StudentUpdateTable";
import { Grid, Row, Col, Button, Table, thead, tr } from 'react-bootstrap';
import './ScoresPage.css';

//loading previous students when you log out and log in as a new user 
//until you click the home button then come back to the scores page.

class ScoresPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: "",
            save: {},
            isEdit: false,
            bgColor: "",
            userId: "",
            id: "",
            students: [],
            gradelevel: "",
            delete: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        const students = this.props.studentdata.students;
        const lastStudent = students[students.length-1];
        const gradelevel = lastStudent.gradelevel;
        console.log("lastStudent", lastStudent)
        console.log("gradelevel:", gradelevel)
        console.log("componentdidmount:", this.props.studentdata.students)
        this.setState({ students, gradelevel })
    }
    mouseDown(event){
        event.preventDefault();
        this.setState({bgColor: "#E9EBF4"})
    }
    mouseUp(event){
        event.preventDefault();
        this.setState({bgColor: "#F7F7FB"})
    }
    handleEdit(event){
        event.preventDefault();
        this.setState({isEdit: !this.state.isEdit})
        if(this.state.isEdit === true){
            this.props.fetchStudentData();
            // fetch("/api/studentdata").then((res)=>{
            //     return res.json()
            // }).then((studentdata)=>{
            //     this.setState({students: studentdata})
            // })
        }
    }
    handleDelete(student){
        const id = student.id;
        console.log("handleDelete:", student)
        let options = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id})
        }
        fetch(`/api/studentdata/${id}`, options).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log("response:", res)
        }).catch((err)=>{
            console.log("error:", err)
        })
        this.setState({delete: true})
        this.props.fetchStudentData();
    }

    handleSubmit(studentdata){
        //put fetch is not refreshing when you click the edit/save scores button after clicking
        //the purple save button that is next to each students name.
        const id = studentdata.id;
        const name = studentdata.name;
        const score = studentdata.score;
        const userId = this.props.currentUserId;
        const gradelevel = this.state.gradelevel;
        const subject = studentdata.subject;
        console.log("studentdata:", studentdata)
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
        let students = this.props.studentdata.students;
        let formOrTable = "";
        let buttonText = "";
        let studentList = [];
        let formComponents =[];
        let tableComponents = [];
        let showStyle = "";
        let showStyle2 = "";
        const noShow = {
            display: "none"
        }
        const show = {
            display: "block"
        }
        const showInline = {
            display: "inline flex"
        }
        students.forEach((student, index)=>{
            const id = student._id;
            const userId = this.props.currentUserId;
            const name = student.name;
            const gradelevel = this.state.gradelevel;
            const subject = student.subject;
            const BOYscore = student.score[0].BOYscore;
            const EOYgoal = student.score[1].EOYgoal;
            const MOYscore = student.score[2].MOYscore;
            const EOYscore = student.score[3].EOYscore;
            // console.log(id, name, gradelevel, subject, BOYscore, EOYgoal, MOYscore, EOYscore)
            let sc = <StudentUpdateForm key={index} id={id} userId={userId} name={name} gradelevel={gradelevel} subject={subject} BOYscore={BOYscore} EOYgoal={EOYgoal} MOYscore={MOYscore} EOYscore={EOYscore} onFormSubmit={this.handleSubmit} onStudentDelete={this.handleDelete}/>
            formComponents.push(sc);
        })
        students.forEach((student, index)=>{
            const id = student._id;
            const name = student.name;
            const gradelevel = this.state.gradelevel;
            const subject = student.subject;
            const BOYscore = student.score[0].BOYscore;
            const EOYgoal = student.score[1].EOYgoal;
            const MOYscore = student.score[2].MOYscore;
            const EOYscore = student.score[3].EOYscore;
            let sc = <StudentUpdateTable key={index} id={id} name={name} gradelevel={gradelevel} subject={subject} BOYscore={BOYscore} EOYgoal={EOYgoal} MOYscore={MOYscore} EOYscore={EOYscore}/>
            tableComponents.push(sc)
        })
        if(this.state.isEdit === true){
            formOrTable = formComponents;
            buttonText = "Save Scores";
            showStyle = show;
            showStyle2 = showInline;
        } else {
            formOrTable = tableComponents;
            buttonText = "Edit Scores";
            showStyle = noShow;
            showStyle2 = noShow;
        }
        return(
            <div className="secretpage">
                <div className="secretgradeandbutton">
                    <h2 className="secretgradelevel">{this.state.gradelevel}</h2>
                    <Button className="editbutton" onClick={this.handleEdit} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} style={{backgroundColor: this.state.bgColor}}>{buttonText}</Button>
                </div>
                <form>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th className="tableheader">Student Name:</th>
                            <th className="tableheader" id="hidelabel">Grade Level:</th>
                            <th className="tableheader">Subject:</th>
                            <th className="tableheader">BOY Score:</th>
                            <th className="tableheader">EOY Goal:</th>
                            <th className="tableheader">MOY Score:</th>
                            <th className="tableheader" id="EOY">EOY Score:</th>
                            <th className="tableheader" style={showStyle} id="saveheader"></th>
                            <th className="tableheader" style={showStyle2}></th>
                        </tr>
                    </thead>
                    <tbody>
                    {formOrTable}
                    </tbody>
                </Table>
                </form>
            </div>
        );
    }
}

export default ScoresPage;