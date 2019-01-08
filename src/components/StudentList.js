import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import Image1 from '../images/content-save.png';

class StudentList extends Component{
    constructor(){
        super();
        this.state={
            isEdit: false,
            isClicked: false,
            firstName: "",
            BOYscore: "",
            EOYgoal: "",
            MOYscore: "",
            EOYscore: ""

        }
        this.renderInput = this.renderInput.bind(this);
        this.renderTable = this.renderTable.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleBoyScoreChange = this.handleBoyScoreChange.bind(this);
        this.handleEoyGoalChange = this.handleEoyGoalChange.bind(this);
        this.handleMoyScoreChange = this.handleMoyScoreChange.bind(this);
        this.handleEoyScoreChange = this.handleEoyScoreChange.bind(this);
        this.handleInputClick = this.handleInputClick.bind(this);
        
    }

    //handleChange functions
    handleFirstNameChange(event){
        if(this.state.firstName === ""){
            this.setState({firstName: event.target.value})
        } else if(this.state.firstName !== ""){
            this.setState({firstName: event.target.value})
        } else {
            this.setState({firstName: event.target.placeholder})
        }
        // if (this.state.isClicked === false){
        //     this.setState({firstName: event.target.placeholder})
        // }else if(this.state.isClicked === true && this.state.firstName === null){
        //     this.setState({firstName: event.target.placeholder})
        // } else if(this.state.isClicked === true && this.state.firstName !== null){
        //     this.setState({firstName: event.target.value})
        // } else {
        //     this.setState({firstName: event.target.value})
        // }
    }

    handleBoyScoreChange(event){
        if(this.state.BOYscore === ""){
            this.setState({BOYscore: event.target.value})
        } else if(this.state.BOYscore !== ""){
            this.setState({BOYscore: event.target.value})
        } else {
            this.setState({BOYscore: event.target.placeholder})
        }
    }

    handleEoyGoalChange(event){
        if(this.state.EOYgoal === ""){
            this.setState({EOYgoal: event.target.value})
        } else if(this.state.EOYgoal !== ""){
            this.setState({EOYgoal: event.target.value})
        } else {
            this.setState({EOYgoal: event.target.placeholder})
        } 
    }

    handleMoyScoreChange(event){
        if(this.state.MOYscore === ""){
            this.setState({MOYscore: event.target.value})
        } else if(this.state.MOYscore !== ""){
            this.setState({MOYscore: event.target.value})
        } else {
            this.setState({MOYscore: event.target.placeholder})
        }
    }
    
    handleEoyScoreChange(event){
        if(this.state.EOYscore === "" && this.state.isClicked === true ){
            this.setState({EOYscore: event.target.value})
        } else if(this.state.EOYscore !== ""){
            this.setState({EOYscore: event.target.value})
        } else {
            this.setState({EOYscore: event.target.placeholder})
        } 
    }
    //handleInputClick function 
    handleInputClick(event){
        this.setState({isClicked: true})
    }
    //handleSubmit function
    handleSubmit(event){
        console.log(event)
    }

    //render input function 
    renderInput(){
        let props = this.props;
        return(
            <tr>
                <td>
                    <input type="text" value={this.state.firstName} className="studentlistinput" onChange={this.handleFirstNameChange} placeholder={props.firstName} onClick={this.handleInputClick}></input>
                </td>
                <td>
                    <input type="text" value={this.state.BOYscore} className="studentlistinput" onChange={this.handleBoyScoreChange} placeholder={props.BOYscore} onClick={this.handleInputClick}></input>
                </td>
                <td>
                    <input type="text" value={this.state.EOYgoal} className="studentlistinput" onChange={this.handleEoyGoalChange} placeholder={props.EOYgoal} onClick={this.handleInputClick}></input>
                </td>
                <td>
                    <input type="text" value={this.state.MOYscore} className="studentlistinput" onChange={this.handleMoyScoreChange} placeholder={props.MOYscore} onClick={this.handleInputClick}></input>
                </td>
                <td>
                    <input type="text" value={this.state.EOYscore} className="studentlistinput" onChange={this.handleEoyScoreChange} placeholder={props.EOYscore} onClick={this.handleInputClick}></input>
                </td>
                <Button type="submit" className="studentlistbutton" onClick={this.handleSubmit}>
                    <img 
                        src={Image1} 
                        alt="save" 
                        id="saveimage"
                    />
                </Button>
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