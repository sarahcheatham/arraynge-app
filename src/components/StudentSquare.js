import React, {Component} from "react";
import ReadingBenchmarks from '../api/readingbenchmarks.json';

class StudentSquare extends Component{
    constructor(){
        super();
        this.state={
            userId: "",
            students: []
        };
    }


    render(){
        let whatToShow = "blanksquare";
        console.log(ReadingBenchmarks)
        return (
            <span className={whatToShow}></span>
        )
    }
}
export default StudentSquare;