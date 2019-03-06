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
        this.groupClick = this.groupClick.bind(this);
    }

    showMenu(event){
        event.preventDefault();
        this.setState({ showMenu: true}, ()=>{
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event){
        event.preventDefault();
        if(!this.dropdownMenu.contains(event.target)){
            this.setState({ showMenu: false}, ()=>{
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }
    groupClick(event){
        event.preventDefault();
        this.setState({
            numberOfGroups: event.target.value
        })
        this.props.onGroupsClick({
            numberOfGroups: this.state.numberOfGroups
        })
    }

    render(){
        let whatToShow = this.state.numberOfGroups;
        return(
            <form className={this.props.className} onSubmit={this.groupClick.bind(this)}>
                <ControlLabel className="groupsLabel">Number of Groups:</ControlLabel>
                <Button onClick={this.showMenu} className='groupsDropMenuButton'>
                    {whatToShow}
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
                            <Button className='groupsChangeButton' onClick={this.groupClick} value="2">2 groups</Button>
                            <Button className='groupsChangeButton' onClick={this.groupClick} value="3">3 groups</Button>
                            <Button className='groupsChangeButton' onClick={this.groupClick} value="4">4 groups</Button>
                            <Button className='groupsChangeButton' onClick={this.groupClick} value="5">5 groups</Button>
                            <Button className='groupsChangeButton' onClick={this.groupClick} value="6">6 groups</Button>
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