import React, {Component} from "react";
import StudentForm from './StudentForm';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StudentDataPage.css';


class StudentDataPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            classdata: [],
            error: null,
            numberOfStudents: "",
            data: [],
            lastclass: {},
            gradelevel: "",
            subject: "",
            userId: ""
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({ loading: true })
        this.props.loadClassData();
        this.props.loadStudentData();
        // load lastclass into state?
    }

    // componentDidUpdate(prevProps, prevState, snapshot){
    //     const { lastclass } = this.props;
    //     if(prevProps.lastclass){
    //         console.log("props:", prevProps.lastclass)
    //     }
    //     // console.log("props:", lastclass)
    //     // console.log("prevProps:", prevProps.lastclass.subject)
    //     // console.log("props:", this.props.lastclass.subject)
    //     // if(this.props.lastclass.loading && !prevProps.lastclass.loading){
    //     //     console.log("SUBJECT:",this.props.lastclass.subject)
    //     // }
    // }
    

    handleFormSubmit(studentdata){
        const blankScore = "";
        if(studentdata.score[0].BOYscore=== undefined){
            studentdata.score[0].BOYscore = blankScore
        } 
        if (studentdata.score[1].EOYgoal === undefined){
            studentdata.score[1].EOYgoal = blankScore
        } 
        if (studentdata.score[2].MOYscore === undefined){
            studentdata.score[2].MOYscore = blankScore
        } 
        if (studentdata.score[3].EOYscore === undefined){
            studentdata.score[3].EOYscore = blankScore
        }
        console.log("studentdata.score:", studentdata.score[0])
        this.setState({
            name: studentdata.name,
            score: studentdata.score,
            userId: studentdata.userId
        });
        const name = studentdata.name;
        const score = studentdata.score;
        const userId = studentdata.userId;
        const gradelevel = this.state.gradelevel;
        const subject = this.state.subject;

        // var student = { userId, name, gradelevel, subject, score }
        // this.state.lastClass.students.push(student); // add the student to the class
        // do a fetch(PUT) to /api/classdata/:id to update the class

        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ userId, name, gradelevel, subject, score })
        }
        fetch("/api/studentdata", options).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

    handleClick(e){
        this.props.loadStudentData()
    }
    render(){
        const styles = {
            color: 'black',
            textDecoration: 'none'
        }
        let studentComponents = [];
        for(let i = 0; i < this.state.numberOfStudents; i++){
            let sc = <StudentForm key={i} onFormSubmit={this.handleFormSubmit}/>
            studentComponents.push(sc)
        }
        return(
            <div className="studentdatacontainer">
                <form>
                    <h2 className="subjectheader">MATH</h2>
                    <h2 className="studentdatasubheader">ENTER STUDENT DATA</h2>
                    <FormGroup controlId='formNumberOfStudents'>
                        <ControlLabel className="numberofstudents">Please enter the number of students in your class:</ControlLabel>{' '}
                        <FormControl 
                            type='text'
                            name='numberOfStudents'
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            value={this.state.numberOfStudents}
                        />
                    </FormGroup>
                </form>
                {studentComponents}
                <Button className="continuebutton" onClick={this.handleClick}><Link to={'/arrayngement'} style={styles} className="continuebutton">CONTINUE</Link></Button>
            </div>
        )
    }
}
export default StudentDataPage;