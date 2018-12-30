import React, {Component} from "react";
// import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ClassDataPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            gradelevel: "",
            subject: ""
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.gradeLevelClick = this.gradeLevelClick.bind(this);
        this.subjectClick = this.subjectClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    showMenu(event){
        event.preventDefault();
        this.setState({ showMenu: true}, ()=>{
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event){
        if(!this.dropdownMenu.contains(event.target)){
            this.setState({ showMenu: false}, ()=>{
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    gradeLevelClick(event){
        event.preventDefault();
        console.log(event.target.innerHTML)
        this.setState({
            gradelevel: event.target.innerHTML
        })
    }

    subjectClick(event){
        event.preventDefault();
        console.log(event.target.innerHTML.toUpperCase())
        this.setState({
            subject: event.target.innerHTML.toUpperCase()
        })
    }

    handleSubmit(){
        const gradelevel = this.state.gradelevel;
        const subject = this.state.subject;
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({gradelevel, subject})
        }
        fetch("/api/classdata", options).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data)
        }).catch((err)=> {
            console.log(err)
        })
    }
    
    render(){
        const styles = {
            color: 'black',
            textDecoration: 'none'
        }
        let whatToShow = "SHOW GRADE LEVELS";
        if(this.state.gradelevel !==""){
            whatToShow = this.state.gradelevel;
            if(this.state.showMenu === true){
                whatToShow = "SHOW GRADE LEVELS"
            }
        }
        return(
            <form className="classDataPage">
                <div className="classDataPageHeader">
                    <SubHeader text="ENTER CLASS DATA"/>
                </div>
                <span className="gradeLevel">
                    <p className="classDataSubHeader">GRADE LEVEL</p>
                    <p className="classDataText">Choose the grade level that you would like to arraynge</p>
                </span>
                {/* <DropMenu className="dropMenuContainer"/> */}
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
                                <Button className='grades' onClick={this.gradeLevelClick}>Kindergarten</Button>
                                <Button className='grades' onClick={this.gradeLevelClick}>First Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick}>Second Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick}>Third Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick}>Fourth Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick}>Fifth Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick}>Six Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick}>Seventh Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick}>Eigth Grade</Button>
                            </div>
                        ) 
                        : (
                            null
                        )
                    }
                </div>
                <span className="subject">
                    <p className="classDataSubHeader">SUBJECT</p>
                    <p className="classDataText">Choose the subject that you would like to arraynge</p>
                    <div className="subjectButtons">
                        <Button type="button" className="mathButton" onClick={this.subjectClick}>
                            {/* <Link to={'/studentdata'} style={styles} onClick={this.subjectClick}> */}
                            MATH
                            {/* </Link> */}
                        </Button>
                        <Button type="button" className="readingButton" onClick={this.subjectClick}>
                            {/* <Link to={'/studentdata'} style={styles} > */}
                            READING
                        </Button>
                    </div>
                </span>
                <Link to={'/studentdata'} style={styles} className="classdatabutton">
                    <Button type="submit" className="classdatabutton" onClick={this.handleSubmit}>
                        SAVE
                    </Button>
                </Link>
            </form>
        )
    }
}

// ClassDataPage.propTypes = {
//     onGradeLevelClick: PropTypes.func.isRequired,
// }
export default ClassDataPage;