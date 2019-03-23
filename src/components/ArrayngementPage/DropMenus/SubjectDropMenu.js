import React, {Component} from "react";
import PropTypes from 'prop-types';
import { ControlLabel, Button } from 'react-bootstrap';

class SubjectDropMenu extends Component{
    constructor(){
        super();

        this.state={
            showMenu: false,
            subject: ""
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.subjectClick = this.subjectClick.bind(this);
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

    subjectClick(event){
        event.preventDefault();
        console.log(event.target.innerHTML)
        this.setState({
            subject: event.target.innerHTML
        })
        this.props.onSubjectClick({
            subject: this.state.subject
        })
    }

    render(){
        let showSubject = "READING"
        let otherSubject = "";
        console.log("props.subject:", this.props.subject)
        if(this.props.subject === ''){
            showSubject = "READING";
            otherSubject = "MATH";
        } else if(this.props.subject === "READING") {
            showSubject = "READING";
            otherSubject = "MATH";
        } else {
            showSubject = "MATH";
            otherSubject = "READING";
        }
        return(
            <form className={this.props.className}>
                <ControlLabel className="subjectLabel">Subject:</ControlLabel>
                <Button onClick={this.showMenu} className='subjectDropMenuButton'>
                    {showSubject}
                    {/* {this.props.subject} */}
                </Button>

                {
                    this.state.showMenu 
                    ?
                    (
                        <div 
                            className='subjectDropMenu'
                            ref = {(element)=>{
                                this.dropdownMenu = element;
                            }}
                        >
                            <Button className='subjectChangeButton' onClick={this.subjectClick}>{otherSubject}</Button>
                        </div>
                    ) 
                    : (
                        null
                    )
                }
            </form>
        );
    }
}

SubjectDropMenu.propTypes ={
    onSubjectClick: PropTypes.func.isRequired
};
export default SubjectDropMenu;