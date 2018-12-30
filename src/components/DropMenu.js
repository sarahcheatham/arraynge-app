import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class DropMenu extends Component{
    constructor(){
        super();

        this.state={
            showMenu: false,
            gradelevel: ""
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.gradeLevelClick = this.gradeLevelClick.bind(this);
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

    render(){
        return(
            <form className={this.props.className}>
                <Button onClick={this.showMenu} className='mainDropMenuButton'>
                    SHOW GRADE LEVELS
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
            </form>
        );
    }
}
// DropMenu.propTypes ={
//     onGradeLevelClick: PropTypes.func.isRequired
// };

export default DropMenu;