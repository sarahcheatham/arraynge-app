import React, {Component} from "react";
import PropTypes from 'prop-types';
import { ControlLabel, Button } from 'react-bootstrap';

class ArrayngementDropMenu extends Component{
    constructor(){
        super();
        this.state={
            showMenu: false,
            sortBy: ""
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.scoreClick = this.scoreClick.bind(this);
    }

    showMenu(event){
        event.preventDefault();
        this.setState({ showMenu: true}, ()=>{
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event){
        if(!this.dropdownMenu.contains(event.target)){
            this.setState({ showMenu: false }, ()=>{
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    scoreClick(event){
        event.preventDefault();
        this.setState({
            sortBy: event.target.innerHTML
        })
        this.props.onSortBy({
            sortBy: this.state.sortBy
        })
    }

    render(){
        let whatToShow = "score";
        if(this.state.gradelevel !==""){
            whatToShow = this.state.sortBy;
        }
        return(
            <form className={this.props.className} onSubmit={this.scoreClick.bind(this)}>
                <ControlLabel className="scoresLabel">Sort By:</ControlLabel>{' '}
                <Button onClick={this.showMenu} className='mainDropMenuButtonArrayngement'>
                    {whatToShow}
                </Button>

                {
                    this.state.showMenu 
                    ?
                    (
                        <div 
                            className='arrayngementDropMenu'
                            ref = {(element)=>{
                                this.dropdownMenu = element;
                            }}
                        >
                            <Button className='scores' onClick={this.scoreClick}>BOY score</Button>
                            <Button className='scores' onClick={this.scoreClick}>MOY score</Button>
                            <Button className='scores' onClick={this.scoreClick}>EOY score</Button>
                            <Button className='scores' onClick={this.scoreClick}>EOY goal</Button>
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
ArrayngementDropMenu.propTypes ={
    onSortBy: PropTypes.func.isRequired
};

export default ArrayngementDropMenu;