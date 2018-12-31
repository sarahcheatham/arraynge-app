import React, {Component} from "react";
import { DropdownButton, MenuItem } from 'react-bootstrap';

class ArrayngementPage extends Component{
    constructor(){
        super();
        this.state={
            data: [],
            students: []
        };
    }

    componentDidMount(){
        fetch("/api/studentdata").then((res)=>{
            return res.json()
        }).then((data)=>{
            this.setState({data: data, students: data.slice()});
        });
    }
   
    render(){
        const students = this.state.students.slice();
        const student = students.map((student, index)=>{
            return <li key={index}><div className="student">{student.name}</div></li>
        })
        return(
            <div className="arrayngementpage">
                <span className="inputbar">
                    <p className="studentlabel">STUDENTS:</p>
                    <p className="arrayngementsubject">READING</p>
                </span>
                <div>
                    <ul className="studentlist">
                        {student}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ArrayngementPage;