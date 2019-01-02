import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class DropMenu extends Component{
    constructor(){
        super();

        this.state={
            showMenu: false,
            sortBy: ""
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
            sortBy: event.target.innerHTML
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
                            <Button className='grades' onClick={this.gradeLevelClick}>BOY score</Button>
                            <Button className='grades' onClick={this.gradeLevelClick}>MOY score</Button>
                            <Button className='grades' onClick={this.gradeLevelClick}>EOY score</Button>
                            <Button className='grades' onClick={this.gradeLevelClick}>EOY goal</Button>
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