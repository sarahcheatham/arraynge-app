import React, {Component} from "react";

export default class DropMenu extends Component{
    constructor(){
        super();

        this.state={
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
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

    render(){
        return(
            <div className={this.props.className}>
                <button onClick={this.showMenu} className='mainDropMenuButton'>
                    SHOW GRADE LEVELS
                </button>

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
                            <button className='grades'>Kindergarten</button>
                            <button className='grades'>First Grade</button>
                            <button className='grades'>Second Grade</button>
                            <button className='grades'>Third Grade</button>
                            <button className='grades'>Fourth Grade</button>
                            <button className='grades'>Fifth Grade</button>
                            <button className='grades'>Six Grade</button>
                            <button className='grades'>Seventh Grade</button>
                            <button className='grades'>Eigth Grade</button>
                        </div>
                    ) 
                    : (
                        null
                    )
                }
            </div>
        );
    }
}