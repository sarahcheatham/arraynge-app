import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';
import Image1 from '../images/content-save.png';

class StudentList extends Component{
    constructor(){
        super();
        this.state={
            isEdit: false,
            save_changes:{},
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
        this.changeNameValue = this.changeNameValue.bind(this);
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
        const { name, BOYscore, EOYgoal, MOYscore, EOYscore } = this.props;
        this.setState({ name, BOYscore, EOYgoal, MOYscore, EOYscore })
    }

    changeNameValue(event){
        this.setState({name: event.target.value})
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
                        onChange={this.changeNameValue}
                        placeholder={props.name} 
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
    name: PropTypes.string.isRequired,
    BOYscore: PropTypes.number,
    EOYgoal: PropTypes.number,
    MOYscore: PropTypes.number,
    EOYscore: PropTypes.number
};

export default StudentList;