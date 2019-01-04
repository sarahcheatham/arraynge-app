import React, {Component} from "react";
import ArrayngementDropMenu from "./ArrayngementDropMenu";
import StudentSquare from "./StudentSquare";

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

    handleSortBy(event){
        console.log(event)
        this.setState({
            sortBy: event.sortBy
        });

    }

    render(){
        const students = this.state.students.slice();
        const relevantStudentsCheck = (students) =>{
            if(students !== null){
                return students.userId === this.state.userId
            }
        }
        const relevantStudents = students.filter(relevantStudentsCheck);
        const studentArr = relevantStudents.slice();
        let student = null;
        let colorToShow = "blankSquare";
        if(this.state.sortBy === "BOY score"){
            const sortStudentsBoy = studentArr.sort((a, b)=>{
                return b.score[0].BOYscore - a.score[0].BOYscore
            });
            student = sortStudentsBoy.map((student, index)=>{
                return <li key={index}><div className="student"><StudentSquare className={colorToShow}/>{student.name}</div></li>
            })
        }
        if(this.state.sortBy === "MOY score"){
             const sortStudentsMoy = studentArr.sort((a, b)=>{
                 return b.score[2].MOYscore - a.score[2].MOYscore
             })
             student = sortStudentsMoy.map((student, index)=>{
                 return <li key={index}><div className="student"><StudentSquare className={colorToShow}/>{student.name}</div></li>
             })
        }
        if(this.state.sortBy === "EOY score"){
            const sortStudentsEoy = studentArr.sort((a, b)=>{
                return b.score[3].EOYscore - a.score[3].EOYscore
            })
            student = sortStudentsEoy.map((student, index)=>{
                return <li key={index}><div className="student"><StudentSquare className={colorToShow}/>{student.name}</div></li>
            })
        }
        if(this.state.sortBy === "EOY goal"){
            const sortStudentsEoyGoal = studentArr.sort((a, b)=>{
                return b.score[1].EOYgoal - a.score[1].EOYgoal
            })
            student = sortStudentsEoyGoal.map((student, index)=>{
                return <li key={index}><div className="student"><StudentSquare className={colorToShow}/>{student.name}</div></li>
            })
        }
        student = studentArr.map((student, index)=>{
            return <li key={index}><span className="student"><StudentSquare className={colorToShow}/>{student.name}</span></li>
        })
        
        return(
            <div className="arrayngementpage">
                <span className="inputbar">
                    <p className="studentlabel">STUDENTS:</p>
                    <ArrayngementDropMenu className="arrayngementdropmenu" onSortBy={this.handleSortBy}/>
                    <p className="arrayngementsubject">subject</p>
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