import React, {Component} from "react";
// import SideNav from './SideNav';

export default class Navbar extends Component{
    state = {
        navClicked: false
    };

    handleClick = (event)=>{
        this.setState({navClicked: true})
        if(this.state.navClicked === true){
            const dropDown = document.getElementById('myDropdown');
            if(dropDown.classList.contains('show')){
                dropDown.classList.remove('show');
                this.setState({navClicked: false})
            }
        }
        event.preventDefault();
    }
    
    render(){
        const className = this.state.navClicked ? 'dropdown-content show' : 'dropdown-content';
        return(
            <div className="navbar">
                {/* <a className="menu" onClick={this.handleClick}>
                    <span className="menu-icon-line"></span>
                    <span className="menu-icon-line"></span>
                    <span className="menu-icon-line"></span>
                </a> 
                <div className="dropdown">
                    <div className={className} id="myDropdown">
                        <SideNav/> 
                       <a>Log In</a>
                        <a>Sign Up</a> 
                    </div>
                </div> */}
            </div> 
        )
    }
}