import React, {Component} from "react";
import benchmarks from '../api/benchmarks.json';

class StudentSquare extends Component{
    constructor(){
        super();
    }
    
    render(){
        return (
            <span className={this.props.className}></span>
        )
    }
}
export default StudentSquare;