import React, {Component} from "react";
import StudentForm from './StudentForm';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


class StudentDataPage extends Component{
    constructor(){
        super();
        this.state = {
            numberofstudents: "",
            data: [],
            gradelevel: "",
            subject: "",
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    componentDidMount(){
        fetch("/api/classdata")
        .then(res=> res.json())
        .then(data => {
            this.setState({ data })
            data.map((item, index)=>{
            this.setState({gradelevel: item.gradelevel, subject: item.subject})
            })
        })
        
    }

    handleFormSubmit(event){

        this.setState({
            name: event.name,
            score: event.score
            // score: [
            //    {BOYscore: event.BOYscore},
            //    {EOYgoal: event.EOYgoal},
            //    {MOYscore: event.MOYscore},
            //    {EOYscore: event.EOYscore}
            // ]
        });
        const name = this.state.name;
        console.log(name)
        const score = this.state.score;
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name, score })
        }
        fetch("/api/studentdata", options).then((res)=>{
            return res.json()
        }).then((studentdata)=>{
            console.log(studentdata)
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        let studentComponents = [];

        for(let i = 0; i < this.state.numberofstudents; i++){
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
                            name='numberofstudents'
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            value={this.state.numberofstudents}
                        />
                    </FormGroup>
                </form>
                {studentComponents}
            </div>
        )
    }
}
export default StudentDataPage;