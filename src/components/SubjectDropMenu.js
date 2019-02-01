import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

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
    }

    render(){
        return(
            <form className={this.props.className}>
                <Button onClick={this.showMenu} className='subjectDropMenuButton'>
                    SUBJECT
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
                            <Button className='subjectReading' onClick={this.subjectClick}>READING</Button>
                            <Button className='subjectMath' onClick={this.subjectClick}>MATH</Button>
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
// DropMenu.propTypes ={
//     onGradeLevelClick: PropTypes.func.isRequired
// };

export default SubjectDropMenu;