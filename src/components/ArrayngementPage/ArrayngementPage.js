import React, {Component} from "react";
import benchmarks from '../../api/benchmarks.json';
import ArrayngementDropMenu from "./ArrayngementDropMenu";
import './ArrayngementPage.css';
import SubjectDropMenu from "./SubjectDropMenu";
import NumberOfGroupsDropMenu from './NumberOfGroupsDropMenu';
import TwoGroups from "./TwoGroups";
import ThreeGroups from "./ThreeGroups";
import FourGroups from "./FourGroups";
import FiveGroups from "./FiveGroups";
import SixGroups from "./SixGroups";

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
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
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

    handleSubjectChange(event){
        console.log(event)
        this.setState({
            subject: event.subject
        })
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
        const benchmark = [];
        let boyBenchmark = null;
        let moyBenchmark = null;
        let eoyBenchmark = null;
        const findBm = benchmarks.find((bm, index)=>{
            const gradelevel = this.state.gradelevel.toUpperCase();
            const subject = this.state.subject;
            if(bm.gradelevel === gradelevel && bm.subject === subject){
               benchmark.push(bm) 
            }
        })
        if(benchmark[0] !== undefined){
            //rounds the benchmark down to nearest integer based on decimal
            boyBenchmark = Math.floor(benchmark[0].score[0].BOYscore);
            moyBenchmark = Math.floor(benchmark[0].score[1].MOYscore);
            eoyBenchmark = Math.floor(benchmark[0].score[2].EOYscore);
        }
        console.log(boyBenchmark, moyBenchmark, eoyBenchmark)
        const studentArr = this.state.students.slice();
        //filter students by subject
        const checkSubject = (students)=>{
            if(students !== null){
                return students.subject === this.state.subject  
            }
        }
        const filteredStudents = studentArr.filter(checkSubject);
        //sort students by time of year for tests
        let studentCards = null;
        if(this.state.sortBy === "BOY score"){
            const sortStudentsBoy = filteredStudents.sort((a, b)=>{
                return b.score[0].BOYscore - a.score[0].BOYscore
            });
            studentCards = sortStudentsBoy.map((student, index)=>{
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
             const sortStudentsMoy = filteredStudents.sort((a, b)=>{
                 return b.score[2].MOYscore - a.score[2].MOYscore
             })
             studentCards = sortStudentsMoy.map((student, index)=>{
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
            const sortStudentsEoy = filteredStudents.sort((a, b)=>{
                return b.score[3].EOYscore - a.score[3].EOYscore
            })
            studentCards = sortStudentsEoy.map((student, index)=>{
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
            const sortStudentsEoyGoal = filteredStudents.sort((a, b)=>{
                return b.score[1].EOYgoal - a.score[1].EOYgoal
            })
            studentCards = sortStudentsEoyGoal.map((student, index)=>{
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
        console.log("studentCards:",studentCards)
        //assign a square to each student based on their scores compared to the benchmarks
        studentCards = filteredStudents.map((student, index)=>{
            let color = "";
            if(this.state.sortBy === ""){
                color = "blankSquare"
            }
            if(this.state.sortBy === "BOY score"){
                if(student.score[0].BOYscore >= boyBenchmark +5){
                    color = "blueSquare"
                } else if(student.score[0].BOYscore >= boyBenchmark){
                    color = "greenSquare"
                } else if(student.score[0].BOYscore >= boyBenchmark -5){
                    color = "yellowSquare"
                } else if(student.score[0].BOYscore >= boyBenchmark -10){
                    color = "orangeSquare"
                } else if(student.score[0].BOYscore < boyBenchmark -10){
                    color = "redSquare"
                } else if(student.score[0].BOYscore === null){
                    color = "blankSquare"
                } else {
                    color = "blankSquare"
                }
            }
            if(this.state.sortBy === "MOY score"){
                if(student.score[2].MOYscore >= moyBenchmark +5){
                    color = "blueSquare"
                } else if(student.score[2].MOYscore >= moyBenchmark){
                    color = "greenSquare"
                } else if(student.score[2].MOYscore >= moyBenchmark -5){
                    color = "yellowSquare"
                } else if(student.score[2].MOYscore >= moyBenchmark -10){
                    color = "orangeSquare"
                } else if(student.score[2].MOYscore < moyBenchmark -10){
                    color = "redSquare"
                } else {
                    color = "blankSquare"
                }
            }
            if(this.state.sortBy === "EOY goal"){
                if(student.score[1].EOYgoal >= eoyBenchmark +5){
                    color = "blueSquare"
                } else if(student.score[1].EOYgoal >= eoyBenchmark){
                    color = "greenSquare"
                } else if(student.score[1].EOYgoal >= eoyBenchmark -5){
                    color = "yellowSquare"
                } else if(student.score[1].EOYgoal >= eoyBenchmark -10){
                    color = "orangeSquare"
                } else if(student.score[1].EOYgoal < eoyBenchmark -10){
                    color = "redSquare"
                } else {
                    color = "blankSquare"
                }
            }
            if(this.state.sortBy === "EOY score"){
                if(student.score[3].EOYscore >= eoyBenchmark +5){
                    color = "blueSquare"
                } else if(student.score[3].EOYscore >= eoyBenchmark){
                    color = "greenSquare"
                } else if(student.score[3].EOYscore >= eoyBenchmark -5){
                    color = "yellowSquare"
                } else if(student.score[3].EOYscore >= eoyBenchmark -10){
                    color = "orangeSquare"
                } else if(student.score[3].EOYscore < eoyBenchmark -10){
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
                    <SubjectDropMenu className="arrayngementsubject" subject={this.state.subject} onSubjectClick={this.handleSubjectChange}/>
                </span>
                <div>
                    <ul className="studentlist">
                        {studentCards}
                    </ul>
                </div>
                {/* <TwoGroups onDrop={this.drop} onDragOver={this.allowDrop}/> */}
                <ThreeGroups onDrop={this.drop} onDragOver={this.allowDrop}/>
                {/* <FourGroups onDrop={this.drop} onDragOver={this.allowDrop}/> */}
                {/* <FiveGroups onDrop={this.drop} onDragOver={this.allowDrop}/> */}
                {/* <SixGroups onDrop={this.drop} onDragOver={this.allowDrop}/> */}
                {/* <div id="groupcontainer" className="droppable"> */}
                    {/* <span
                    id="grouponebox"
                    className="droppable"
                    onDrop={this.drop}
                    onDragOver={this.allowDrop}
                    > */}
                        {/* <input type="text" className="groupheader" placeholder="group one"/> */}
                        {/* <p className="groupheader">group one</p> */}
                    {/* </span> */}
                {/* </div> */}
            </div>
        );
    }
}

export default ArrayngementPage;