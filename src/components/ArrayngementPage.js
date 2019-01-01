import React, {Component} from "react";
import { DropdownButton, MenuItem } from 'react-bootstrap';

class ArrayngementPage extends Component{
    constructor(){
        super();
        this.state={
            data: [],
            users: []
        };
    }
    // componentDidMount(){
    //     fetch("/api/users").then((res)=>{
    //         return res.json()
    //     }).then((users)=>{
    //         console.log(users)
    //     })
    // }

    componentDidMount(){
        fetch("/api/studentdata").then((res)=>{
            return res.json()
        }).then((data)=>{
            this.setState({data: data});
        });
    }
   
    render(){
        const students = this.state.data.slice();
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