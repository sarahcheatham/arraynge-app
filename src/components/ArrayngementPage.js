import React, {Component} from "react";
import ArrayngementDropMenu from "./ArrayngementDropMenu";
import StudentSquare from "./StudentSquare";
import readingBenchmarks from '../api/readingBenchmarks.json';
import mathBenchmarks from '../api/mathBenchmarks.json';


class ArrayngementPage extends Component{
    constructor(){
        super();
        this.state={
            students: [],
            sortBy: "",
            userId: "",
            subject: "",
            gradelevel: ""
        };
        this.handleSortBy = this.handleSortBy.bind(this);
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
            const relevantStudentsCheck = (students) =>{
                if(students !== null){
                    return students.userId === this.state.userId
                }
            }
            const relevantStudents = students.filter(relevantStudentsCheck);
            const lastStudent = relevantStudents[relevantStudents.length -1];
            const subject = lastStudent.subject;
            const gradelevel = lastStudent.gradelevel
            this.setState({
                students: relevantStudents,
                subject: subject,
                gradelevel: gradelevel
            });
        });
    }

    handleSortBy(event){
        console.log(event)
        this.setState({
            sortBy: event.sortBy
        });
    }

    render(){
        const studentArr = this.state.students.slice();
        let student = null;
        let colorToShow = "blankSquare";
        const gradeLevelCheckBoy = (studentArr)=>{
            return studentArr.score[0].BOYscore >= 140
        }
        const onGradeLevelBoy = studentArr.filter(gradeLevelCheckBoy);
        console.log(onGradeLevelBoy)
        const belowGradeLevelCheckBoy = (studentArr)=>{
            return studentArr.score[0].BOYscore < 140
        }
        const belowGradeLevelBoy = studentArr.filter(belowGradeLevelCheckBoy)
        console.log(belowGradeLevelBoy)
        if(this.state.sortBy === "BOY score"){
            const sortStudentsBoy = studentArr.sort((a, b)=>{
                return b.score[0].BOYscore - a.score[0].BOYscore
            });
            student = sortStudentsBoy.map((student, index)=>{
                return <li key={index}><div className="student"><span className={colorToShow}/><span className="studentName">{student.name}</span></div></li>
            })
        }
        if(this.state.sortBy === "MOY score"){
             const sortStudentsMoy = studentArr.sort((a, b)=>{
                 return b.score[2].MOYscore - a.score[2].MOYscore
             })
             student = sortStudentsMoy.map((student, index)=>{
                 return <li key={index}><div className="student"><span className={colorToShow}/><span className="studentName">{student.name}</span></div></li>
             })
        }
        if(this.state.sortBy === "EOY score"){
            const sortStudentsEoy = studentArr.sort((a, b)=>{
                return b.score[3].EOYscore - a.score[3].EOYscore
            })
            student = sortStudentsEoy.map((student, index)=>{
                return <li key={index}><div className="student"><span className={colorToShow}/><span className="studentName">{student.name}</span></div></li>
            })
        }
        if(this.state.sortBy === "EOY goal"){
            const sortStudentsEoyGoal = studentArr.sort((a, b)=>{
                return b.score[1].EOYgoal - a.score[1].EOYgoal
            })
            student = sortStudentsEoyGoal.map((student, index)=>{
                return <li key={index}><div className="student"><span className={colorToShow}/><span className="studentName">{student.name}</span></div></li>
            })
        }
        student = studentArr.map((student, index)=>{
            return <li key={index}><span className="student"><span className={colorToShow}/><span className="studentName">{student.name}</span></span></li>
        })
        
        return(
            <div className="arrayngementpage">
                <span className="inputbar">
                    <p className="studentlabel">STUDENTS:</p>
                    <ArrayngementDropMenu className="arrayngementdropmenu" onSortBy={this.handleSortBy}/>
                    <p className="arrayngementsubject">{this.state.subject}</p>
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