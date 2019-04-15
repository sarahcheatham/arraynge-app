import React, {Component} from "react";
import StudentForm from './StudentForm';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StudentDataPage.css';


class StudentDataPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfStudents: "",
            data: [],
            gradelevel: "",
            subject: "",
            userId: ""
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    componentDidMount(){
        fetch("/api/classdata")
        .then(res=> res.json())
        .then(data => {
            this.setState({ data })
            data.map(item=>{
                this.setState({gradelevel: item.gradelevel, subject: item.subject, userId: item.userId})
            })
        })
    }

    handleFormSubmit(studentdata){
        console.log("studentdata:", studentdata)
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

    render(){
        let whatToShow = '';
        const styles = {
            color: 'black',
            textDecoration: 'none'
        }
        if(this.state.numberOfStudents !== ''){
            whatToShow = <Button className="continuebutton"><Link to={'/arrayngement'} style={styles} className="continuebutton">CONTINUE</Link></Button>;
        } else {
            whatToShow = '';
        }
        let studentComponents = [];
        for(let i = 0; i < this.state.numberOfStudents; i++){
            let sc = <StudentForm key={i} onFormSubmit={this.handleFormSubmit}/>
            studentComponents.push(sc)
        }
        return(
            <div className="studentdatacontainer">
                <form>
                    <h2 className="subjectheader">{this.state.subject}</h2>
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
                {whatToShow}
            </div>
        )
    }
}
export default StudentDataPage;