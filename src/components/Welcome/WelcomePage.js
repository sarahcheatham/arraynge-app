import React, {Component} from "react";
import ReactDOM from "react-dom";
// import PropTypes from 'prop-types';
import SubHeader from '../SubHeader';
import ClassListItem from './ClassListItem';
import SaveButton from './SaveButton';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./WelcomePage.css";

class WelcomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            welcomeMessage: "",
            allClasses: [],
            currentClass: {},
            checked: false,
            gradelevel: "",
            year: "",
            itemId: "",
            subject: "",
            numOfStudents:""
        };
        this.checkedClass = React.createRef();
    }

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
        }).then(lastClass => {
            const gradelevel = lastClass.gradelevel;
            const subject = lastClass.subject;
            const year = lastClass.year;
            const numOfStudents = lastClass.numOfStudents;
            const itemId = lastClass._id;
            console.log("lastClass:", lastClass)
            // this.setState({
            //     currentClass: lastClass
            // });
            this.setState({ gradelevel, subject, year, numOfStudents, itemId})
        });
        fetch(`/api/classdata`).then((res)=>{
            return res.json();
        }).then((allClasses)=>{
            this.setState({
                allClasses: allClasses
            });
        });
    }

    checkItem = item =>{
        this.setState({checked: true})
        const itemId = item.itemId;
        const gradelevel = item.gradelevel;
        const subject = item.subject; 
        const year = item.year;
        this.setState({ itemId, gradelevel, subject, year })
        console.log("item:", item)
        this.props.loadCurrentClass(itemId)
    };

    showButton = (e, item) => {
        e.preventDefault();
        console.log("showButton:", this.props.currentClass.curr)
    }

    render(){
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
        const buttonStyle = {
            float: 'right',
            padding: 0,
            margin: 0,
        }
        const saveButton = {
            width: 75,
            alignSelf: 'flex-end',
            fontFamily: 'quasimoda, sans-serif'
        }
        
        return(
            <div className="welcomepage">
                <SubHeader className="greeting" text={this.state.welcomeMessage}/>
                <div className="currentClassContainer">
                    <div id="currClassHeader">CURRENT CLASS</div>
                    <div className="currClassPropList"><span className="currClassTitle">YEAR:</span>{" "}<span className="currClassText"></span></div>
                    <div className="currClassPropList"><span className="currClassTitle">GRADE LEVEL:</span>{" "}<span className="currClassText">{this.state.gradelevel}</span></div>
                    <div className="currClassPropList"><span className="currClassTitle">SUBJECT:</span>{" "}<span className="currClassText">{this.state.subject}</span></div>
                    <div className="currClassPropList"><span className="currClassTitle">NUMBER OF STUDENTS:</span>{" "}<span className="currClassText"></span></div>
                </div>
                <div className="chooseDiffClassContainer">
                    <div className="diffClassHeader">CHOOSE A DIFFERENT CLASS:</div>
                    {/* {this.state.checked ? <SaveButton style={saveButton} show={this.showButton}/> : <div></div>} */}
                    <ul className="classList">
                        {this.state.allClasses.map((item, index) => {
                            const year = item.year;
                            const subject = item.subject;
                            const gradelevel = item.gradelevel;
                            const itemId = item._id;
                            return <ClassListItem ref={this.checkedClass} key={index} className="classListItem" itemId={itemId} subject={subject} gradelevel={gradelevel} onCheck={this.checkItem} show={this.showButton}/>
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