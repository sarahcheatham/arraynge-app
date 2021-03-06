import React, {Component} from "react";
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Image1 from '../../images/content-save.png';
import SvgIcon from '@material-ui/core/SvgIcon';

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
            ],
            check: false
        };
    }

    componentDidMount(){
        fetch("/api/hey").then((res)=>{
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({check: true})
        this.props.onFormSubmit({
            userId: this.state.userId,
            name: this.state.name,
            score:[
                {BOYscore: this.state.BOYscore},
                {EOYgoal: this.state.EOYgoal},
                {MOYscore: this.state.MOYscore},
                {EOYscore: this.state.EOYscore} 
            ]
        })
    }

    render(){
        let showStyle = "";
        const noShow = {
            display: "none"
        }
        const show = {
            color: "8FAD57"
        }
        if(this.state.check === true){
            showStyle = show;
        } else {
            showStyle = noShow;
        }

        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup className="studentdatapage">
                    <FormGroup controlId='formInlineStudent'>
                        <ControlLabel className="studentdataname">Student First Name:</ControlLabel>{' '}
                        <FormControl 
                            type="text" 
                            placeholder="Jane Doe" 
                            className="studentdatainputs" 
                            name="name" 
                            onChange={e=>{
                                this.setState({[e.target.name]: e.target.value});
                            }}
                            value={this.state.name}
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
                    <div className="checkbox">
                        <SvgIcon style={{showStyle}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path nativeColor="#8FAD57" fill="none" d="M0 0h24v24H0z"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></SvgIcon>
                    </div>
                </FormGroup>
            </form>
        );
    }
}

StudentForm.propTypes ={
    onFormSubmit: PropTypes.func.isRequired
};

export default StudentForm;