import React, {Component} from "react";
import benchmarks from '../api/benchmarks.json';

class StudentSquare extends Component{
    constructor(){
        super();
        this.state={
            userId: "",
            classdata: [],
            students: []
        };
    }
    componentDidMount(){
        fetch("/api/hey").then((res)=>{
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
        fetch("/api/studentdata").then((res)=>{
            return res.json()
        }).then((students)=>{
            console.log(students)
            this.setState({students: students});
        });
    }


    render(){
        let whatToShow = "blanksquare";
        // console.log(benchmarks)
        return (
            <span className={whatToShow}></span>
        )
    }
}
export default StudentSquare;