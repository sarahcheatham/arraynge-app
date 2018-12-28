import React, {Component} from "react";
import StudentForm from './StudentForm';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


class StudentDataPage extends Component{
    constructor(){
        super();
        this.state = {
            numberofstudents: null
        };
    }

    render(){
        let studentComponents = [];

        for(let i = 0; i < this.state.numberofstudents; i++){
            let sc = <StudentForm/>
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