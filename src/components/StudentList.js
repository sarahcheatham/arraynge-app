import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import Image1 from '../images/content-save.png';

class StudentList extends Component{
    constructor(){
        super();
        this.state={
            isEdit: false,
            userId: "",
            name: "",
            score: [
                {BOYscore: ''},
                {EOYgoal: ''},
                {MOYscore: ''},
                {EOYscore: ''}
            ]
        }
        this.renderInput = this.renderInput.bind(this);
        this.renderTable = this.renderTable.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBoyScoreChange = this.handleBoyScoreChange.bind(this);
        this.handleEoyGoalChange = this.handleEoyGoalChange.bind(this);
        this.handleMoyScoreChange = this.handleMoyScoreChange.bind(this);
        this.handleEoyScoreChange = this.handleEoyScoreChange.bind(this);
    }
    componentDidMount(){
        fetch("/api/hey").then((res)=>{
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
    }

    //handleNameChange
    handleNameChange(event){
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    //handleBoyScoreChange
    handleBoyScoreChange(event){
        event.preventDefault();
        this.setState({BOYscore: event.target.placeholder})
        if(this.state.BOYscore !== ""){
            this.setState({BOYscore: event.target.value})
        } else {
            this.setState({BOYscore: event.target.value})
        }
    }

    //handleEoyGoalChange
    handleEoyGoalChange(event){
        event.preventDefault();
        this.setState({EOYgoal: event.target.placeholder})
        if(this.state.EOYgoal !== ""){
            this.setState({EOYgoal: event.target.value})
        } else {
            this.setState({EOYgoal: event.target.value})
        }
    }

    //handleMoyScoreChange
    handleMoyScoreChange(event){
        event.preventDefault();
        this.setState({MOYscore: event.target.placeholder})
        if(this.state.MOYscore !== ""){
            this.setState({MOYscore: event.target.value})
        } else {
            this.setState({MOYscore: event.target.value})
        }
    }

    //handleEoyScoreChange
    handleEoyScoreChange(event){
        event.preventDefault();
        this.setState({EOYscore: event.target.placeholder})
        if(this.state.EOYscore !== ""){
            this.setState({EOYscore: event.target.value})
        } else {
            this.setState({EOYscore: event.target.value})
        }
    }
    //handleSubmit function
    handleSubmit(event){
        // fetch(`/api/studentdata/${this.state.userId}`, )
    }

    //render input function 
    renderInput(){
        let props = this.props;
        return(
            <tr>
                <td>
                    <input 
                        type="text" 
                        value={this.state.name}
                        name="name" 
                        className="studentlistinput" 
                        onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}
                        placeholder={props.name} 
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        value={this.state.BOYscore} 
                        name="BOYscore" 
                        className="studentlistinput" 
                        onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}
                        placeholder={props.BOYscore} 
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        value={this.state.EOYgoal} 
                        name="EOYgoal" 
                        className="studentlistinput" 
                        onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}
                        placeholder={props.EOYgoal} 
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        value={this.state.MOYscore} 
                        name="MOYscore"
                        className="studentlistinput" 
                        onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}
                        placeholder={props.MOYscore}
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        value={this.state.EOYscore} 
                        name="EOYscore" 
                        className="studentlistinput" 
                        onChange={e=>{
                            this.setState({[e.target.name]: e.target.value});
                        }}
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
            </tr>
        )
    }

    //render table function 
    renderTable(){
        let props = this.props;
        return(
            <tr className="A">
                <td className="tablecell">{props.firstName}</td>
                <td className="tablecell">{props.BOYscore}</td>
                <td className="tablecell">{props.EOYgoal}</td>
                <td className="tablecell">{props.MOYscore}</td>
                <td className="tablecell">{props.EOYscore}</td>
            </tr>
        )
    }
    
    render(){
        let props = this.props;
        let whatToShow = ""
        if(this.state.isEdit === false){
            //input fuction
            whatToShow = this.renderInput();
        } else{
            //table function
            whatToShow = this.renderTable();
        }
        return(
            <tbody>
                {whatToShow}
            </tbody>
        )
    }
}
StudentList.propTypes = {
    firstName: PropTypes.string.isRequired,
    BOYscore: PropTypes.number,
    EOYgoal: PropTypes.number,
    MOYscore: PropTypes.number,
    EOYscore: PropTypes.number
};

export default StudentList;