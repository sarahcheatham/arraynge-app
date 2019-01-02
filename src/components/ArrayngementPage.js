import React, {Component} from "react";
import { DropdownButton, MenuItem } from 'react-bootstrap';

class ArrayngementPage extends Component{
    constructor(){
        super();
        this.state={
            students: [],
            classdata: [],
            userId: ""
        };
    }

    componentDidMount(){
        fetch("/api/hey").then((res)=>{
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
        fetch("/api/classdata").then((res)=>{
            return res.json()
        }).then((classdata)=>{
            this.setState({classdata: classdata});
        });
        fetch("/api/studentdata").then((res)=>{
            return res.json()
        }).then((students)=>{
            this.setState({students: students});
        });
    }
   
    render(){
        const students = this.state.students.slice();
        const rightStudentsCheck = (students) =>{
            if(students !== null){
                return students.userId === this.state.userId
            }
        }
        const rightStudents = students.filter(rightStudentsCheck);
        console.log(rightStudents)
        const student = rightStudents.map((student, index)=>{
            return <li key={index}><div className="student">{student.name}</div></li>
        })
        const classdata = this.state.classdata.slice();
        const subject = classdata.map((item, index)=>{
            return item.subject
        })
        const currentSubject = subject.pop();
        return(
            <div className="arrayngementpage">
                <span className="inputbar">
                    <p className="studentlabel">STUDENTS:</p>
                    <p className="arrayngementsubject">{currentSubject}</p>
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