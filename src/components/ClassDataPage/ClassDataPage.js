import React, {Component} from "react";
import SubHeader from '../SubHeader';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ClassDataPage.css';

class ClassDataPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            currentUser: "",
            classdata: {
                userId: "",
                gradelevel: "",
                subject: ""
            }
        }
    };

    componentDidMount(){
        this.props.loadClassData();
        this.props.loadStudentData();
    }

    showMenu = event => {
        event.preventDefault();
        this.setState({ showMenu: true}, ()=>{
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = event => {
        if(!this.dropdownMenu.contains(event.target)){
            this.setState({ showMenu: false}, ()=>{
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    gradeLevelClick = event => {
        event.preventDefault();
        const gradelevel = {gradelevel: event.target.value};
        this.props.setGradeLevel(event.target.value)
        this.setState({
            classdata: Object.assign(this.state.classdata, gradelevel)
        })
    }

    subjectClick = event => {
        event.preventDefault();
        const subject = {subject: event.target.value};
        this.props.setSubject(event.target.value)
        this.setState({
            classdata: Object.assign(this.state.classdata, subject),
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const classdata = {
            userId: this.props.currentUserId,
            gradelevel: this.props.gradelevel,
            subject: this.props.subject
        }
        console.log("CLASSDATA PROPS:", classdata)
        this.setState({
            classdata: Object.assign(this.state.classdata, classdata)
        })
        this.props.createClassData(classdata)
    }
    handleContinueClick = event => {
        this.props.loadStudentData()
    }
    
    render(){
        const styles = {
            color: 'black',
            textDecoration: 'none'
        }
        let whatToShow = "";
        this.props.gradelevel === "" ? whatToShow = "SHOW GRADE LEVELS" : whatToShow = this.props.gradelevel
        return(
            <div className="classDataPage">
                <form>
                    <div className="classDataPageHeader">
                        <SubHeader text="CREATE A NEW CLASS" className="classDataPageHeader"/>
                    </div>
                    <span className="subject">
                        <p className="classDataSubHeader">SUBJECT</p>
                        <p className="classDataText">Choose the subject that you would like to arraynge</p>
                        <div className="subjectButtons">
                            <Button type="button" className="mathButton" onClick={this.subjectClick} value="MATH">
                                MATH
                            </Button>
                            <Button type="button" className="readingButton" onClick={this.subjectClick} value="READING">
                                READING
                            </Button>
                        </div>
                    </span>
                    <span className="gradeLevel">
                        <p className="classDataSubHeader">GRADE LEVEL</p>
                        <p className="classDataText">Choose the grade level that you would like to arraynge</p>
                    </span>
                    <div className="dropMenuContainer">
                        <Button onClick={this.showMenu} className='mainDropMenuButton'>
                            {whatToShow}
                        </Button>
                        {
                            this.state.showMenu 
                            ?
                            (
                                <div 
                                    className='dropMenu'
                                    ref = {(element)=>{
                                        this.dropdownMenu = element;
                                    }}
                                >
                                    <Button className='grades' onClick={this.gradeLevelClick} value="Kindergarten">Kindergarten</Button>
                                    <Button className='grades' onClick={this.gradeLevelClick} value="First Grade">First Grade</Button>
                                    <Button className='grades' onClick={this.gradeLevelClick} value="Second Grade">Second Grade</Button>
                                    <Button className='grades' onClick={this.gradeLevelClick} value="Third Grade">Third Grade</Button>
                                    <Button className='grades' onClick={this.gradeLevelClick} value="Fourth Grade">Fourth Grade</Button>
                                    <Button className='grades' onClick={this.gradeLevelClick} value="Fifth Grade">Fifth Grade</Button>
                                    <Button className='grades' onClick={this.gradeLevelClick} value="Sixth Grade">Sixth Grade</Button>
                                    <Button className='grades' onClick={this.gradeLevelClick} value="Seventh Grade">Seventh Grade</Button>
                                    <Button className='grades' onClick={this.gradeLevelClick} value="Eigth Grade">Eigth Grade</Button>
                                </div>
                            ) 
                            : (
                                null
                            )
                        }
                    </div>
                    <span className="classdatabuttonscontainer">
                        <Button type="submit" className="classdatabutton" onClick={this.handleSubmit}>
                            SAVE
                        </Button>
                        <Link to={'/studentdata'} style={styles} className="classdatabutton">
                            <Button type="submit" className="classdatacontinuebutton" onClick={this.handleContinueClick}>
                                CONTINUE
                            </Button>
                        </Link>
                    </span>
                </form>
            </div>
        )
    }
}


export default ClassDataPage;

