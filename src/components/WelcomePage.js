import React, {Component} from "react";
import PropTypes from 'prop-types';

class WelcomePage extends Component{
    constructor(){
        super();
        this.state={
            name: ""
        };
    }
    componentDidMount(){
        fetch("/api/welcome").then((res)=>{
            return res.text();
        }).then((data)=>{
            this.setState({
                name: data
            });
        });
    }
    render(){
        return(
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default WelcomePage;