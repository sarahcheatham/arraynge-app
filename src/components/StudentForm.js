import React, {Component} from "react";
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class StudentForm extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <form>
                <div className="studentdatapage">
                    <FormGroup controlId='formInlineStudent'>
                        <ControlLabel className="studentdataname">Student First Name:</ControlLabel>{' '}
                        <FormControl type="text" placeholder="Jane Doe" className="studentdatainputs"/>
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineBoyScore">
                        <ControlLabel className="studentdatalabels">BOY Score:</ControlLabel>{' '}
                        <FormControl type="text" className="studentdatainputs"></FormControl>
                    </FormGroup>
                    <FormGroup controlId="formInlineEoyGoal">
                        <ControlLabel className="studentdatalabels">EOY Goal:</ControlLabel>{' '}
                        <FormControl type="text" className="studentdatainputs"></FormControl>
                    </FormGroup>
                    <FormGroup controlId="formInlineMoyScore">
                        <ControlLabel className="studentdatalabels">MOY Score:</ControlLabel>{' '}
                        <FormControl type="text" className="studentdatainputs"></FormControl>
                    </FormGroup>
                    <FormGroup controlId="formInlineEoyScore">
                        <ControlLabel className="studentdatalabels">EOY Score:</ControlLabel>{' '}
                        <FormControl type="text" className="studentdatainputs"></FormControl>
                    </FormGroup>
                </div>
            </form>
        )
    }
}
export default StudentForm;