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
        this.props.loadClassData();
        this.props.loadStudentData();
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
        const purple = {
            color: "#5F4B8B",
            textDecoration: 'none',
            fontFamily: "quasimoda, sans-serif",
            fontStyle: "normal",
            fontWeight: 300
        }
        const green = { 
            color: "#357E85",
            textDecoration: 'none',
            fontFamily: "quasimoda, sans-serif",
            fontStyle: "normal",
            fontWeight: 300
        }
        const maroon = {
            color: "#892E5D",
            textDecoration: 'none',
            fontFamily: "quasimoda, sans-serif",
            fontStyle: "normal",
            fontWeight: 300
        }
        const red = {
            color: "#B0585E",
            textDecoration: 'none',
            fontFamily: "quasimoda, sans-serif",
            fontStyle: "normal",
            fontWeight: 300
        }
        return(
            <div className="welcomepage">
                <SubHeader className="greeting" text={this.state.welcomeMessage}/>
                <div className="currentClassContainer">
                    <div className="currClassProps">
                        <div id="currClassHeader">CURRENT CLASS</div>
                        <div className="currClassPropList"><span className="currClassTitle">YEAR:</span>{" "}<span className="currClassText"></span></div>
                        <div className="currClassPropList"><span className="currClassTitle">GRADE LEVEL:</span>{" "}<span className="currClassText">{this.state.currentClass.gradelevel}</span></div>
                        <div className="currClassPropList"><span className="currClassTitle">SUBJECT:</span>{" "}<span className="currClassText">{this.state.currentClass.subject}</span></div>
                        <div className="currClassPropList"><span className="currClassTitle">NUMBER OF STUDENTS:</span>{" "}<span className="currClassText"></span></div>
                    </div>
                </div>
                <div className="chooseDiffClassContainer">
                    <div className="diffClassHeader">CHOOSE A DIFFERENT CLASS:</div>
                    <ul className="classList">
                        {this.state.allClasses.map((item, index) => {
                            const subject = item.subject;
                            const gradelevel = item.gradelevel;
                            return <ClassListItem key={index} className="classListItem" subject={subject} gradelevel={gradelevel}/>
                        })}
                        
                    </ul>
                </div> 
                <div className="fourButtons">
                <div className="arrayngeClassButtonContainer">
                    <div className="subsubhead">ARRAYNGE THIS CLASS:</div>
                    <Button className="welcomeButtons" id="arrayngeClassButton">
                        <Link to={'/arrayngement'} style={purple}>
                            ARRAYNGE
                        </Link>
                    </Button>
                </div>
                <div className="newClassButtonContainer">
                    <div className="subsubhead">CREATE A NEW CLASS:</div>
                    <Button className="welcomeButtons" id="newClassButton">
                        <Link to={'/classdata'} style={red}>
                            + NEW CLASS
                        </Link>
                    </Button>
                </div>
                <div className="editClassButtonContainer">
                    <div className="subsubhead">EDIT THIS CLASS:</div>
                    <Button className="welcomeButtons" id="editClassButton">
                        <Link to={'/scores'} style={green}>
                            EDIT
                        </Link>
                    </Button>
                </div>
                {/* <div className="newClassButtonContainer">
                    <div className="subsubhead">CREATE A NEW CLASS:</div>
                    <Button className="welcomeButtons" id="newClassButton">
                        <Link to={'/classdata'} style={red}>
                            + NEW CLASS
                        </Link>
                    </Button>
                </div> */}
                <div className="viewChartsButtonContainer">
                    <div className="subsubhead">VIEW CHARTS FOR THIS CLASS:</div>
                    <Button className="welcomeButtons" id="viewChartsButton">
                        <Link to={'/charts'} style={maroon}>
                            VIEW CHARTS
                        </Link>
                    </Button>
                </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;