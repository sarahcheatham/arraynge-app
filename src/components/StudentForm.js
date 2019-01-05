import React, {Component} from "react";
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Image1 from '../images/content-save.png';

class StudentForm extends Component{
    constructor(){
        super();
        this.state = {
            classdata: [],
            userId: '',
            name: '',
            score: [
                {BOYscore: ''},
                {EOYgoal: ''},
                {MOYscore: ''},
                {EOYscore: ''}
            ]
        };
    }

    componentDidMount(){
        this.props.loadUserId();
        // fetch("/api/hey").then((res)=>{
        //     return res.text()
        // }).then((userId)=>{
        //     this.setState({userId: userId})
        // });
    }

    handleSubmit(event){
        event.preventDefault();
        // this.props.createStudentData()
        this.props.onFormSubmit({
            userId: this.state.userId,
            name: this.props.studentName,
            score:[
                {BOYscore: this.state.BOYscore},
                {EOYgoal: this.state.EOYgoal},
                {MOYscore: this.state.MOYscore},
                {EOYscore: this.state.EOYscore}
            ]
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup className="studentdatapage">
                    <FormGroup controlId='formInlineStudent'>
                        <ControlLabel className="studentdataname">Student First Name:</ControlLabel>{' '}
                        <FormControl 
                            type="text" 
                            placeholder="Jane Doe" 
                            className="studentdatainputs" 
                            name="studentName" 
                            onChange={e=>{
                                this.props.setStudentName({[e.target.name]: e.target.value});
                            }}
                            value={this.props.studentName}
                        />
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineBoyScore">
                        <ControlLabel className="studentdatalabels">BOY Score:</ControlLabel>{' '}
                        <FormControl 
                            type="text" 
                            className="studentdatainputs"
                            name="BOYscore" 
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            value={this.state.BOYscore}
                        />
                    </FormGroup>
                    <FormGroup controlId="formInlineEoyGoal">
                        <ControlLabel className="studentdatalabels">EOY Goal:</ControlLabel>{' '}
                        <FormControl 
                            type="text" 
                            className="studentdatainputs"
                            name="EOYgoal" 
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            value={this.state.EOYgoal}
                        />
                    </FormGroup>
                    <FormGroup controlId="formInlineMoyScore">
                        <ControlLabel className="studentdatalabels">MOY Score:</ControlLabel>{' '}
                        <FormControl 
                            type="text" 
                            className="studentdatainputs"
                            name="MOYscore" 
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            value={this.state.MOYscore}
                        />
                    </FormGroup>
                    <FormGroup controlId="formInlineEoyScore">
                        <ControlLabel className="studentdatalabels">EOY Score:</ControlLabel>{' '}
                        <FormControl 
                            type="text" 
                            className="studentdatainputs"
                            name="EOYscore" 
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            value={this.state.EOYscore}
                        />
                    </FormGroup>
                    <Button type="submit" className="studentdatapagebutton">
                        <img 
                            src={Image1} 
                            alt="save" 
                            id="saveimage"
                        />
                    </Button>
                </FormGroup>
            </form>
        );
    }
}

StudentForm.propTypes ={
    onFormSubmit: PropTypes.func.isRequired
};

export default StudentForm;