import React, {Component} from "react";
import ArrayngementDropMenu from "./ArrayngementDropMenu";

class ArrayngementPage extends Component{
    constructor(){
        super();
        this.state={
            students: [],
            classdata: [],
            userId: "",
            sortBy: ""
        };
        this.handleSortBy = this.handleSortBy.bind(this);
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

    handleSortBy(sortBy){
        console.log(sortBy)
        this.setState({
            sortBy: sortBy.sortBy
        });
        const typeOfScore = sortBy;
        const students = this.state.students.slice();
        const relevantStudentsCheck = (students)=>{
            if(students !== null){
                return students.userId === this.state.userId
            }
        }
        const relevantStudents = students.filter(relevantStudentsCheck);
        const getStudents = relevantStudents.map((student, index)=>{
            const studentArr = [];
            const name = student.name;
            const boyScore = student.score[0].BOYscore;
            studentArr.push(name, boyScore);
            const sortByBoy = studentArr.sort((a, b)=>{
                console.log(b)
            })
            return sortByBoy
        })
        console.log(getStudents)
    }
   
    render(){
        const students = this.state.students.slice();
        const relevantStudentsCheck = (students) =>{
            if(students !== null){
                return students.userId === this.state.userId
            }
        }
        const relevantStudents = students.filter(relevantStudentsCheck);
        const student = relevantStudents.map((student, index)=>{
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
                    <ArrayngementDropMenu className="arrayngementdropmenu" onSortBy={this.handleSortBy}/>
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