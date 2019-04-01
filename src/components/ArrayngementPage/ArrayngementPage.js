import React, {Component} from "react";
import benchmarks from '../../api/benchmarks.json';
import './ArrayngementPage.css';
import './Groups/Groups.css';
import ArrayngementDropMenu from "./DropMenus/ArrayngementDropMenu";
import SubjectDropMenu from "./DropMenus/SubjectDropMenu";
import NumberOfGroupsDropMenu from './DropMenus/NumberOfGroupsDropMenu';
import TwoGroups from "./Groups/TwoGroups";
import ThreeGroups from "./Groups/ThreeGroups";
import FourGroups from "./Groups/FourGroups";
import FiveGroups from "./Groups/FiveGroups";
import SixGroups from "./Groups/SixGroups";

class ArrayngementPage extends Component{
    constructor(){
        super();
        this.state={
            students: [],
            list: [],
            sortBy: "",
            userId: "",
            subject: "",
            gradelevel: "", 
            numberOfGroups: ""    
        };
        this.handleSortBy = this.handleSortBy.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleGroupsChange = this.handleGroupsChange.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        // this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
        this.sortStudentScore = this.sortStudentScore.bind(this);
    }

    componentDidMount(){
        const studentArr = this.props.studentdata.students;
        console.log("studentArr componentdidmount:", studentArr)
        const lastStudent = studentArr[studentArr.length-1];
        console.log("lastStudent:", lastStudent)
        const gradelevel = lastStudent.gradelevel;
        const subject = lastStudent.subject;
        this.setState({
            students: studentArr,
            gradelevel: gradelevel,
            subject: subject
        })
        console.log("this.state.students:", this.state.students)
        console.log("this.state.gradelevel:", this.state.gradelevel)
        console.log("this.state.subject:", this.state.subject)

        //     const filteredStudents = students.filter(relevantStudentsCheck);
        //     const lastStudent = filteredStudents[filteredStudents.length -1];
        //     const gradelevel = lastStudent.gradelevel;
        //     const subject = lastStudent.subject;


        // this.props.loadUserId();
        // fetch(`/api/studentdata`).then((res)=>{
        //     return res.json()
        // }).then((students)=>{
        //     const relevantStudentsCheck = (students) =>{
        //         if(students !== null){
        //             return students.userId === this.props.userId
        //         }
        //     }
        //     const filteredStudents = students.filter(relevantStudentsCheck);
        //     const lastStudent = filteredStudents[filteredStudents.length -1];
        //     const gradelevel = lastStudent.gradelevel;
        //     const subject = lastStudent.subject;
        //     this.setState({
        //         students: filteredStudents,
        //         gradelevel: gradelevel,
        //         subject: subject
        //     })
        //     console.log(this.state.students)
        // }) 
        // fetch(`/api/studentdata/:id`).then((res)=>{
        //     return res.json()
        // }).then((filteredStudents)=>{
        //     console.log('filteredStudents:', filteredStudents)
        // }) 
        
        // fetch(`/api/studentdata/${this.state.userId}`).then((res)=>{
        //     return res.json()
        // }).then((filteredStudents)=>{
        //     console.log('filteredStudents:', filteredStudents)
        // })
        // fetch("/api/studentdata").then((res)=>{
        //     return res.json()
        // }).then((students)=>{
        //     const relevantStudentsCheck = (students) =>{
        //         if(students !== null){
        //             return students.userId === this.props.userId
        //         }
        //     }
        //     const relevantStudents = students.filter(relevantStudentsCheck);
        //     const lastStudent = relevantStudents[relevantStudents.length -1];
        //     const subject = lastStudent.subject;
        //     const gradelevel = lastStudent.gradelevel;
        //     this.setState({
        //         students: relevantStudents,
        //         subject: subject,
        //         gradelevel: gradelevel
        //     });
        // });
    }

    handleSortBy(event){
        console.log("handleSortBy:", event)
        this.setState({
            sortBy: event.sortBy
        });
    }

    handleSubjectChange(event){
        console.log("handleSubjectChange:", event)
        this.setState({
            subject: event.subject
        })
    }

    handleGroupsChange(event){
        console.log("handleGroupsChange:", event)
        this.setState({
            numberOfGroups: event.numberOfGroups
        });
    }
   
    allowDrop(allowdropevent){
        allowdropevent.preventDefault();
    }
    
     // drag(dragevent){
    //     dragevent.dataTransfer.setData("text", dragevent.target.id)
    // }

    dragStart = (e, index)=>{
        this.draggedItem = e.target.parentNode.id;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text", e.target.parentNode.id)
    }

    drop(dropevent){
        dropevent.preventDefault();
        var data = dropevent.dataTransfer.getData("text");
        dropevent.target.appendChild(document.getElementById(data));
    }

    scoreInfo = {
        "BOY score": {
            propertyName: "BOYscore",
            index: 0
        },
        "MOY score": {
            propertyName: "MOYscore",
            index: 2
        },
        "EOY score": {
            propertyName: "EOYscore",
            index: 3
        },
        "EOY goal": {
            propertyName: "EOYgoal",
            index: 1
        }
    }

    sortStudentScore(filteredStudents, sortBy){
        // const propertyName = this.scoreInfo[sortBy].propertyName;
        // const index = this.scoreInfo[sortBy].index;

        const { propertyName, index } = this.scoreInfo[sortBy]; // same as above, but using "destructuring"
    
        let studentCards = null;
        const sortStudents = filteredStudents.sort((a, b)=>{
            return b.score[index][propertyName] - a.score[index][propertyName]
        });
        studentCards = sortStudents.map((student, index)=>{
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
        return studentCards
    }

    getColorForScore(sortBy, student, benchmark){
        if(sortBy === ""){
            return "blankSquare"
        }
        const { propertyName, index } = this.scoreInfo[sortBy]; // same as above, but using "destructuring"
        let color = "";

        if(student.score[index][propertyName] >= benchmark +5){
            color = "blueSquare"
        } else if(student.score[index][propertyName] >= benchmark){
            color = "greenSquare"
        } else if(student.score[index][propertyName] >= benchmark -5){
            color = "yellowSquare"
        } else if(student.score[index][propertyName] >= benchmark -10){
            color = "orangeSquare"
        } else if(student.score[index][propertyName] < benchmark -10){
            color = "redSquare"
        } else if(student.score[index][propertyName] === null){
            color = "blankSquare"
        } else {
            color = "blankSquare"
        }
        return color
    }

    getBenchmarkForScore(sortBy){
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
        
        // bench = {
        //     "BOY score": boyBenchmark,
        //     "MOY score": moyBenchmark,
        //     "EOY score": eoyBenchmark
        // }
        // return bench[sortBy]

        if(sortBy === "BOY score"){
            return boyBenchmark
        } else if(sortBy === "MOY score"){
            return moyBenchmark
        } else if(sortBy === "EOY score" || sortBy === "EOY goal"){
            return eoyBenchmark
        }
    }

    render(){
        // const benchmark = [];
        // let boyBenchmark = null;
        // let moyBenchmark = null;
        // let eoyBenchmark = null;
        let numberOfGroupsToShow = "";
        //render correct groups component
        if(this.state.numberOfGroups === ""){
            numberOfGroupsToShow = <FourGroups onDrop={this.drop} onDragOver={this.allowDrop}/>
        }
        if(this.state.numberOfGroups === "2"){
            numberOfGroupsToShow = <TwoGroups onDrop={this.drop} onDragOver={this.allowDrop}/>
        } else if(this.state.numberOfGroups === "3"){
            numberOfGroupsToShow = <ThreeGroups onDrop={this.drop} onDragOver={this.allowDrop}/>
        } else if(this.state.numberOfGroups === "4"){
            numberOfGroupsToShow = <FourGroups onDrop={this.drop} onDragOver={this.allowDrop}/>
        } else if(this.state.numberOfGroups === "5"){
            numberOfGroupsToShow = <FiveGroups onDrop={this.drop} onDragOver={this.allowDrop}/>
        } else if(this.state.numberOfGroups === "6"){
            numberOfGroupsToShow = <SixGroups onDrop={this.drop} onDragOver={this.allowDrop}/>
        } else {
            numberOfGroupsToShow = "";
        }
        const benchmarkScore = this.getBenchmarkForScore(this.state.sortBy);
        // const findBm = benchmarks.find((bm, index)=>{
        //     const gradelevel = this.state.gradelevel.toUpperCase();
        //     const subject = this.state.subject;
        //     if(bm.gradelevel === gradelevel && bm.subject === subject){
        //        benchmark.push(bm) 
        //     }
        // })
        // if(benchmark[0] !== undefined){
        //     //rounds the benchmark down to nearest integer based on decimal
        //     boyBenchmark = Math.floor(benchmark[0].score[0].BOYscore);
        //     moyBenchmark = Math.floor(benchmark[0].score[1].MOYscore);
        //     eoyBenchmark = Math.floor(benchmark[0].score[2].EOYscore);
        // }
        // const studentArr = this.state.students.slice();
        const studentArr = this.props.studentdata.students;
        console.log("studentArr:", studentArr)
        //filter students by subject
        const checkSubject = (students)=>{
            if(students !== null){
                return students.subject === this.state.subject  
            }
        }
        const filteredStudents = studentArr.filter(checkSubject);
        //sort students by time of year for tests
        let studentCards = null;
        if(this.state.sortBy > ""){
            this.sortStudentScore(filteredStudents, this.state.sortBy)  
        }

        // this.sortStudentScore(filteredStudents, this.sortInfo[this.state.sortBy].index, this.sortInfo[this.state.sortBy].propertyName)
        // if(this.state.sortBy === "BOY score"){
        //     this.sortStudentScore(filteredStudents, this.state.sortBy)  
        // this.sortStudentScore(filteredStudents, 0, "BOYscore")
            // const sortStudentsBoy = filteredStudents.sort((a, b)=>{
            //     return b.score[0].BOYscore - a.score[0].BOYscore
            // });
            // studentCards = sortStudentsBoy.map((student, index)=>{
            //     let color = "";
            //     return <li key={index}>
            //                 <div className="student">
            //                     <span className={color}/>
            //                     <span className="studentName">
            //                         {student.name}
            //                     </span>
            //                 </div>
            //             </li>
            // })
        //}
        // if(this.state.sortBy === "MOY score"){
        //     this.sortStudentScore(filteredStudents, 2, "MOYscore")
        //     //  const sortStudentsMoy = filteredStudents.sort((a, b)=>{
        //     //      return b.score[2].MOYscore - a.score[2].MOYscore
        //     //  })
        //     //  studentCards = sortStudentsMoy.map((student, index)=>{
        //     //      let color = "";
        //     //      return <li key={index}>
        //     //                 <div className="student">
        //     //                     <span className={color}/>
        //     //                     <span className="studentName">
        //     //                         {student.name}
        //     //                     </span>
        //     //                 </div>
        //     //             </li>
        //     //  })
        // }
        // if(this.state.sortBy === "EOY score"){
        //     this.sortStudentScore(filteredStudents, 3, "EOYscore")
        //     // const sortStudentsEoy = filteredStudents.sort((a, b)=>{
        //     //     return b.score[3].EOYscore - a.score[3].EOYscore
        //     // })
        //     // studentCards = sortStudentsEoy.map((student, index)=>{
        //     //     let color = "";
        //     //     return <li key={index}>
        //     //                 <div className="student">
        //     //                     <span className={color}/>
        //     //                     <span className="studentName">
        //     //                         {student.name}
        //     //                     </span>
        //     //                 </div> 
        //     //             </li>
        //     // })
        // }
        // if(this.state.sortBy === "EOY goal"){
        //     this.sortStudentScore(filteredStudents, 1, "EOYgoal")
        //     // const sortStudentsEoyGoal = filteredStudents.sort((a, b)=>{
        //     //     return b.score[1].EOYgoal - a.score[1].EOYgoal
        //     // })
        //     // studentCards = sortStudentsEoyGoal.map((student, index)=>{
        //     //     let color = "";
        //     //     return <li key={index}>
        //     //                 <div className="student">
        //     //                     <span className={color}/>
        //     //                     <span className="studentName">
        //     //                         {student.name}
        //     //                     </span>
        //     //                 </div>
        //     //             </li>
        //     // })
        // }
        //assign a square to each student based on their scores compared to the benchmarks
        studentCards = filteredStudents.map((student, index)=>{
            let color = "";
            // if(this.state.sortBy === ""){
            //     color = "blankSquare"
            // }
            // if(this.state.sortBy > ""){
            color = this.getColorForScore(this.state.sortBy, student, benchmarkScore)
            // }
            // this.getColorForScore(this.state.sortBy, student, benchmarkScore)
            // if(this.state.sortBy === "BOY score"){
            //     if(student.score[0].BOYscore >= boyBenchmark +5){
            //         color = "blueSquare"
            //     } else if(student.score[0].BOYscore >= boyBenchmark){
            //         color = "greenSquare"
            //     } else if(student.score[0].BOYscore >= boyBenchmark -5){
            //         color = "yellowSquare"
            //     } else if(student.score[0].BOYscore >= boyBenchmark -10){
            //         color = "orangeSquare"
            //     } else if(student.score[0].BOYscore < boyBenchmark -10){
            //         color = "redSquare"
            //     } else if(student.score[0].BOYscore === null){
            //         color = "blankSquare"
            //     } else {
            //         color = "blankSquare"
            //     }
            // }
            // if(this.state.sortBy === "MOY score"){
            //     if(student.score[2].MOYscore >= moyBenchmark +5){
            //         color = "blueSquare"
            //     } else if(student.score[2].MOYscore >= moyBenchmark){
            //         color = "greenSquare"
            //     } else if(student.score[2].MOYscore >= moyBenchmark -5){
            //         color = "yellowSquare"
            //     } else if(student.score[2].MOYscore >= moyBenchmark -10){
            //         color = "orangeSquare"
            //     } else if(student.score[2].MOYscore < moyBenchmark -10){
            //         color = "redSquare"
            //     } else {
            //         color = "blankSquare"
            //     }
            // }
            // if(this.state.sortBy === "EOY goal"){
            //     if(student.score[1].EOYgoal >= eoyBenchmark +5){
            //         color = "blueSquare"
            //     } else if(student.score[1].EOYgoal >= eoyBenchmark){
            //         color = "greenSquare"
            //     } else if(student.score[1].EOYgoal >= eoyBenchmark -5){
            //         color = "yellowSquare"
            //     } else if(student.score[1].EOYgoal >= eoyBenchmark -10){
            //         color = "orangeSquare"
            //     } else if(student.score[1].EOYgoal < eoyBenchmark -10){
            //         color = "redSquare"
            //     } else {
            //         color = "blankSquare"
            //     }
            // }
            // if(this.state.sortBy === "EOY score"){
            //     if(student.score[3].EOYscore >= eoyBenchmark +5){
            //         color = "blueSquare"
            //     } else if(student.score[3].EOYscore >= eoyBenchmark){
            //         color = "greenSquare"
            //     } else if(student.score[3].EOYscore >= eoyBenchmark -5){
            //         color = "yellowSquare"
            //     } else if(student.score[3].EOYscore >= eoyBenchmark -10){
            //         color = "orangeSquare"
            //     } else if(student.score[3].EOYscore < eoyBenchmark -10){
            //         color = "redSquare"
            //     } else {
            //         color = "blankSquare"
            //     }
            // }
            return <li 
                        key={index}
                        id={index}
                        className="list"
                        onDrop={this.drop}
                        onDragOver={this.allowDrop}
                    >
                        <div 
                            className="student"
                            draggable
                            onDragStart={e=>this.dragStart(e, index)}
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
                    <NumberOfGroupsDropMenu className="arrayngementgroups" onGroupsClick={this.handleGroupsChange}/>
                    <SubjectDropMenu className="arrayngementsubject" subject={this.state.subject} onSubjectClick={this.handleSubjectChange}/>
                </span>
                <div>
                    <ul className="studentlist">
                        {studentCards}
                    </ul>
                </div>
                {numberOfGroupsToShow}
            </div>
        );
    }
}

export default ArrayngementPage;