import React, {Component} from "react";
// import PropTypes from 'prop-types';
import SubHeader from '../SubHeader';
import ClassListItem from './ClassListItem';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./WelcomePage.css";

class WelcomePage extends Component{
    constructor(){
        super();
        this.state={
            welcomeMessage: "",
            allClasses: [],
            currentClass: {}
        };
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log("props:", props)
    //     console.log("state:", state)
    //     console.log('*** eived  s   getDrfetchStudentData ***', props.currentUserId)
    //     props.fetchStudentData(props.currentUserId)
    //     return state;
    // }

    componentDidMount(){
        fetch("/api/welcome").then((res)=>{
            return res.text();
        }).then((welcomeMessage)=>{
            this.setState({
                welcomeMessage: welcomeMessage
            });
        });
        fetch(`/api/classdata/lastclass/:id`).then((res)=>{
            return res.json();
        }).then((lastClass)=>{
            console.log("lastClass:", lastClass)
            this.setState({
                currentClass: lastClass
            });
        });
        fetch(`/api/classdata`).then((res)=>{
            return res.json();
        }).then((allClasses)=>{
            this.setState({
                allClasses: allClasses
            });
        });
    }

    render(){
        console.log(this.state.currentClass.subject)
        console.log("class:", this.state.allClasses)
        const styles = {
            color: '#F7F7FB',
            textDecoration: 'none'
        }
        return(
            <div className="welcomepage">
                <SubHeader className="greeting" text={this.state.welcomeMessage}/>
                <div className="currentClassContainer">
                    <div className="currClassProps">
                        <div id="currClassHeader">CURRENT CLASS</div>
                        <div><span className="currClassTitle">YEAR:</span>{" "}<span className="currClassText"></span></div>
                        <div><span className="currClassTitle">GRADE LEVEL:</span>{" "}<span className="currClassText">{this.state.currentClass.gradelevel}</span></div>
                        <div><span className="currClassTitle">SUBJECT:</span>{" "}<span className="currClassText">{this.state.currentClass.subject}</span></div>
                        <div><span className="currClassTitle">NUMBER OF STUDENTS:</span>{" "}<span className="currClassText"></span></div>
                    </div>
                </div>
                <div className="newClassButtonContainer">
                    <div className="subsubhead">CREATE A NEW CLASS:</div>
                    <Button className="welcomeButtons" id="newClassButton">
                        <Link to={'/classdata'} style={styles}>
                            + NEW CLASS
                        </Link>
                    </Button>
                </div>
                <div className="arrayngeClassButtonContainer">
                    <div className="subsubhead">ARRAYNGE THIS CLASS:</div>
                    <Button className="welcomeButtons" id="arrayngeClassButton">
                        <Link to={'/arrayngement'} style={styles}>
                            ARRAYNGE
                        </Link>
                    </Button>
                </div>
                <div className="editClassButtonContainer">
                    <div className="subsubhead">EDIT THIS CLASS:</div>
                    <Button className="welcomeButtons" id="editClassButton">
                        <Link to={'/scores'} style={styles}>
                            EDIT
                        </Link>
                    </Button>
                </div>
                <div className="chooseDiffClassContainer">
                    <div className="diffClassHeader">CHOOSE A DIFFERENT CLASS:</div>
                    <ul className="classList">
                        {this.state.allClasses.map(item => {
                            const subject = item.subject;
                            const gradelevel = item.gradelevel;
                            return <ClassListItem className="classListItem" subject={subject} gradelevel={gradelevel}/>
                        })}
                        
                    </ul>
                </div> 
                <div className="viewChartsButtonContainer">
                    <div className="subsubhead">VIEW CHARTS FOR THIS CLASS:</div>
                    <Button className="welcomeButtons" id="viewChartsButton">
                        <Link to={'/charts'} style={styles}>
                            VIEW CHARTS
                        </Link>
                    </Button>
                </div>
            </div>
        )
    }
}

export default WelcomePage;