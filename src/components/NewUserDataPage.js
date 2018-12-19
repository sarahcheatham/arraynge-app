import React, {Component} from "react";
import Required from './Required';
import Star from './Star';
import NewUserButton from './NewUserButton';
import SubHeader from './SubHeader';

export default class NewUserDataPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChange = (event)=>{
        let targetType = event.target.id;
        let targetValue = event.target.value;
        console.log(targetType, targetValue)
        if(targetType === 'firstName'){
            this.setState({firstName: targetValue})
        }
        if(targetType === 'lastName'){
            this.setState({lastName: targetValue})
        }
        if(targetType === 'newUserEmail'){
            this.setState({email: targetValue})
        }
        if(targetType === 'newUserPassword'){
            this.setState({password: targetValue})
        }
    };


    render(){
        return(
            <div className='newUserPage'>
                {/* <h1 className='newUserHeader'>CREATE ACCOUNT</h1> */}
                <SubHeader text="CREATE ACCOUNT"/>
                <form className="newUserForm">
                    <Required className="newUserRequired"/>
                    <label className="firstName">
                        First Name<Star/><br/>
                        <input
                            autoFocus
                            type="text"
                            id="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="lastName">
                        Last Name<Star/><br/>
                        <input
                            autoFocus
                            type="text"
                            id="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="newUserEmail">
                        Email<Star/><br/>
                        <input
                            autoFocus
                            type="text"
                            id="newUserEmail"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="newUserPassword">
                        Password<Star/><br/>
                        <input
                            autoFocus
                            type="text"
                            id="newUserPassword"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <NewUserButton className="newUserButton"/>
                </form>
            </div>
        )
    }
}