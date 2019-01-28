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
            gradelevel: "",     
        };
        this.handleSortBy = this.handleSortBy.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
    }

    componentDidMount(){
        this.props.loadUserId();
        fetch("/api/studentdata").then((res)=>{
            return res.json()
        }).then((students)=>{
            const relevantStudentsCheck = (students) =>{
                if(students !== null){
                    return students.userId === this.props.userId
                }
            }
            const relevantStudents = students.filter(relevantStudentsCheck);
            const lastStudent = relevantStudents[relevantStudents.length -1];
            const subject = lastStudent.subject;
            const gradelevel = lastStudent.gradelevel;
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
   
    allowDrop(allowdropevent){
        allowdropevent.preventDefault();
    }
    
    drag(dragevent){
        dragevent.dataTransfer.setData("text", dragevent.target.id)
    }

    drop(dropevent){
        dropevent.preventDefault();
        var data = dropevent.dataTransfer.getData("text");
        dropevent.target.appendChild(document.getElementById(data));
    }

    render(){
        const studentArr = this.state.students.slice();
        let student = null;
        if(this.state.sortBy === "BOY score"){
            const sortStudentsBoy = studentArr.sort((a, b)=>{
                return b.score[0].BOYscore - a.score[0].BOYscore
            });
            student = sortStudentsBoy.map((student, index)=>{
                let color = "";
                return <li key={index}>
                            <div className="student">
                                <span className={color}/>
                                <span className="studentName">
                                    {student.name}
                                </span>
                            </div>
                        </li>
            })
        }
        if(this.state.sortBy === "MOY score"){
             const sortStudentsMoy = studentArr.sort((a, b)=>{
                 return b.score[2].MOYscore - a.score[2].MOYscore
             })
             student = sortStudentsMoy.map((student, index)=>{
                 let color = "";
                 return <li key={index}>
                            <div className="student">
                                <span className={color}/>
                                <span className="studentName">
                                    {student.name}
                                </span>
                            </div>
                        </li>
             })
        }
        if(this.state.sortBy === "EOY score"){
            const sortStudentsEoy = studentArr.sort((a, b)=>{
                return b.score[3].EOYscore - a.score[3].EOYscore
            })
            student = sortStudentsEoy.map((student, index)=>{
                let color = "";
                return <li key={index}>
                            <div className="student">
                                <span className={color}/>
                                <span className="studentName">
                                    {student.name}
                                </span>
                            </div> 
                        </li>
            })
        }
        if(this.state.sortBy === "EOY goal"){
            const sortStudentsEoyGoal = studentArr.sort((a, b)=>{
                return b.score[1].EOYgoal - a.score[1].EOYgoal
            })
            student = sortStudentsEoyGoal.map((student, index)=>{
                let color = "";
                return <li key={index}>
                            <div className="student">
                                <span className={color}/>
                                <span className="studentName">
                                    {student.name}
                                </span>
                            </div>
                        </li>
            })
        }
        student = studentArr.map((student, index)=>{
            console.log(student)
            let color = "";
            if(this.state.sortBy === ""){
                color = "blankSquare"
            }
            if(this.state.sortBy === "BOY score"){
                if(student.score[0].BOYscore >= 141){
                    color = "blueSquare"
                } else if(student.score[0].BOYscore >= 138){
                    color = "greenSquare"
                } else if(student.score[0].BOYscore >= 135){
                    color = "yellowSquare"
                } else if(student.score[0].BOYscore >= 130){
                    color = "orangeSquare"
                } else if(student.score[0].BOYscore < 130){
                    color = "redSquare"
                } else {
                    color = "blankSquare"
                }
            }
            if(this.state.sortBy === "MOY score"){
                if(student.score[2].MOYscore >= 151){
                    color = "blueSquare"
                } else if(student.score[2].MOYscore >= 146){
                    color = "greenSquare"
                } else if(student.score[2].MOYscore >= 140){
                    color = "yellowSquare"
                } else if(student.score[2].MOYscore >= 135){
                    color = "orangeSquare"
                } else if(student.score[2].MOYscore < 135){
                    color = "redSquare"
                } else {
                    color = "blankSquare"
                }
            }
            if(this.state.sortBy === "EOY goal"){
                if(student.score[1].EOYgoal >= 161){
                    color = "blueSquare"
                } else if(student.score[1].EOYgoal >= 155){
                    color = "greenSquare"
                } else if(student.score[1].EOYgoal >= 150){
                    color = "yellowSquare"
                } else if(student.score[1].EOYgoal >= 145){
                    color = "orangeSquare"
                } else if(student.score[1].EOYgoal < 145){
                    color = "redSquare"
                } else {
                    color = "blankSquare"
                }
            }
            if(this.state.sortBy === "EOY score"){
                if(student.score[3].EOYscore >= 161){
                    color = "blueSquare"
                } else if(student.score[3].EOYscore >= 155){
                    color = "greenSquare"
                } else if(student.score[3].EOYscore >= 150){
                    color = "yellowSquare"
                } else if(student.score[3].EOYscore >= 145){
                    color = "orangeSquare"
                } else if(student.score[3].EOYscore < 145){
                    color = "redSquare"
                } else {
                    color = "blankSquare"
                }
            }
            return <li key={index} 
                        id="div1"
                        onDrop={this.drop}
                        onDragOver={this.allowDrop}
                    >
                        <div className="student" 
                            draggable
                            onDragStart={this.drag}
                            id="drag"
                        >
                            <span className={color}/>
                            <span className="studentName">
                                {student.name}
                            </span>
                        </div> 
                    </li>
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
                <div 
                    id="groupcontainer"
                    className="droppable"
                    onDrop={this.drop}
                    onDragOver={this.allowDrop}
                >
                    <span id="grouponebox">
                        <p className="groupheader">group one</p>
                    </span>
                    <span id="grouptwobox">
                        <p className="groupheader">group two</p>
                    </span>
                    <span id="groupthreebox">
                        <p className="groupheader">group three</p>
                    </span>
                    <span id="groupfourbox">
                        <p className="groupheader">group four</p>
                    </span>
                </div>
            </div>
        );
    }
}

export default ArrayngementPage;