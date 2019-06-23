import React, {Component} from "react";
import Star from './Star'

export default class Required extends Component{
    render(){
        
        
        return(
            <div className={this.props.className}>
                Required
                <Star />
            </div>
        )
    }
}