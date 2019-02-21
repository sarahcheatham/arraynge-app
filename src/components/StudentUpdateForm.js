import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import Image1 from '../images/content-save.png';
import SvgIcon from '@material-ui/core/SvgIcon';

class StudentUpdateForm extends Component{
    constructor(){
        super();
        this.state={
            save_changes:{},
            id: "",
            userId: "",
            name: "",
            subject: "",
            gradelevel: "",
            score: [
                {BOYscore: ''},
                {EOYgoal: ''},
                {MOYscore: ''},
                {EOYscore: ''}
            ],
            check: false
        }
        this.changeNameValue = this.changeNameValue.bind(this);
        this.changeSubjectValue = this.changeSubjectValue.bind(this);
        this.changeBoyScore = this.changeBoyScore.bind(this);
        this.changeEoyGoal = this.changeEoyGoal.bind(this);
        this.changeMoyScore = this.changeMoyScore.bind(this);
        this.changeEoyScore = this.changeEoyScore.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch("/api/hey").then((res)=>{
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
        const { id, name, subject, BOYscore, EOYgoal, MOYscore, EOYscore } = this.props;
        this.setState({ id, name, subject, BOYscore, EOYgoal, MOYscore, EOYscore })
    }

    changeNameValue(event){
        this.setState({name: event.target.value})
    }

    changeSubjectValue(event){
        this.setState({subject: event.target.value})
    }

    changeBoyScore(event){
        this.setState({BOYscore: event.target.value})
    }

    changeEoyGoal(event){
        this.setState({EOYgoal: event.target.value})
    }

    changeMoyScore(event){
        this.setState({MOYscore: event.target.value})
    }

    changeEoyScore(event){
        this.setState({EOYscore: event.target.value})
    }

    //handleSubmit function
    handleSubmit(event){
        event.preventDefault();
        this.setState({check: true})
        this.props.onFormSubmit({
            id: this.state.id,
            userId: this.state.userId,
            name: this.state.name,
            subject: this.state.subject,
            gradelevel: this.state.gradelevel,
            score:[
                {BOYscore: this.state.BOYscore},
                {EOYgoal: this.state.EOYgoal},
                {MOYscore: this.state.MOYscore},
                {EOYscore: this.state.EOYscore}
            ]
        })
    }
    render(){
        let props = this.props;
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
            <tr>
                <td>
                    <input 
                        type="text"
                        value={this.state.name} 
                        name="name" 
                        className="studentlistinput" 
                        onChange={this.changeNameValue}
                        placeholder={props.name} 
                    />
                </td>
                <td>
                    <input 
                        type="text"
                        value={this.state.subject} 
                        name="subject" 
                        className="studentlistinput" 
                        onChange={this.changeSubjectValue}
                        placeholder={props.subject} 
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        value={this.state.BOYscore} 
                        name="BOYscore" 
                        className="studentlistinput" 
                        onChange={this.changeBoyScore}
                        placeholder={props.BOYscore} 
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        value={this.state.EOYgoal} 
                        name="EOYgoal" 
                        className="studentlistinput" 
                        onChange={this.changeEoyGoal}
                        placeholder={props.EOYgoal} 
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        value={this.state.MOYscore} 
                        name="MOYscore"
                        className="studentlistinput" 
                        onChange={this.changeMoyScore}
                        placeholder={props.MOYscore}
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        value={this.state.EOYscore} 
                        name="EOYscore" 
                        className="studentlistinput" 
                        onChange={this.changeEoyScore}
                        placeholder={props.EOYscore} 
                    />
                </td>
                <td>
                    <Button className="studentlistbutton" onClick={this.handleSubmit}>
                        <img 
                            src={Image1} 
                            alt="save" 
                            id="saveimage"
                        />
                    </Button>
                </td>
                <div>
                    <SvgIcon style={showStyle}xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path nativeColor="#8FAD57" fill="none" d="M0 0h24v24H0z"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></SvgIcon>
                </div>
            </tr>
        )
    }
}
StudentUpdateForm.propTypes = {
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    BOYscore: PropTypes.number,
    EOYgoal: PropTypes.number,
    MOYscore: PropTypes.number,
    EOYscore: PropTypes.number
};

export default StudentUpdateForm;