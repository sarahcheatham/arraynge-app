import React, {Component} from "react";
import PropTypes from 'prop-types';
import { ControlLabel, Button } from 'react-bootstrap';

class NumberOfGroupsDropMenu extends Component{
    constructor(){
        super();

        this.state={
            showMenu: false,
            numberOfGroups: ""
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

    groupClick(event){
        event.preventDefault();
        console.log(event.target.innerHTML)
        this.setState({
            numberOfGroups: event.target.innerHTML
        })
        this.props.onGroupsClick({
            numberOfGroups: this.state.numberOfGroups
        })
    }

    render(){
        // let whatToShow = "";
        // if(this.props.subject === 'READING'){
        //     whatToShow = "MATH"
        // } else {
        //     whatToShow = "READING"
        // }
        return(
            <form className={this.props.className}>
                <ControlLabel className="groupsLabel">Number Of Groups:</ControlLabel>
                <Button onClick={this.showMenu} className='groupsDropMenuButton'>
                    {this.props.numberOfGroups}
                </Button>

                {
                    this.state.showMenu 
                    ?
                    (
                        <div 
                            className='groupsDropMenu'
                            ref = {(element)=>{
                                this.dropdownMenu = element;
                            }}
                        >
                            <Button className='groupsChangeButton' onClick={this.groupClick}>2</Button>
                            <Button className='groupsChangeButton' onClick={this.groupClick}>3</Button>
                            <Button className='groupsChangeButton' onClick={this.groupClick}>4</Button>
                            <Button className='groupsChangeButton' onClick={this.groupClick}>5</Button>
                            <Button className='groupsChangeButton' onClick={this.groupClick}>6</Button>
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

NumberOfGroupsDropMenu.propTypes ={
    onGroupsClick: PropTypes.func.isRequired
};
export default NumberOfGroupsDropMenu;