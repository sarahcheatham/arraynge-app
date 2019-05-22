import React, {Component} from "react";
import benchmarks from '../../api/benchmarks.json';
import BoyBarChart from './BoyBarChart';
import SubjectButton from './SubjectButton';

class BarChartPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: [],
            gradelevel: "",
            subject: "",
            switchSubject: false
        }
        this.switchSubject = this.switchSubject.bind(this);
    }

    componentDidMount(){
        const students = this.props.studentdata.students;
        const lastStudent = students[students.length-1];
        const gradelevel = lastStudent.gradelevel;
        const subject = lastStudent.subject;
        this.setState({students, gradelevel, subject})
    }

    switchSubject(e){
        console.log("e:", e)
        e.preventDefault();
        let currentSubject = "";
        const subject = this.state.subject;
        console.log("subject:", subject)
        subject === "READING" ? currentSubject = "MATH" : currentSubject = "READING";
        this.setState({ switchSubject: true, subject: currentSubject })
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
    compareData(){
        const students = this.state.students;
        const subject = this.state.subject;
        const gradelevel = this.state.gradelevel;
        const filteredStudents = students.filter(student => student.subject === subject && student.gradelevel === gradelevel);
        const filteredBenchmark = benchmarks.filter(benchmark => benchmark.gradelevel === gradelevel.toUpperCase() && benchmark.subject === subject);
        const studentBOYscores = filteredStudents.map(student => student.score[0].BOYscore);
        const studentEOYgoal = filteredStudents.map(student => student.score[1].EOYgoal);
        const studentMOYscores = filteredStudents.map(student => student.score[2].MOYscore);
        const studentEOYscores = filteredStudents.map(student => student.score[3].EOYscore);
        console.log("studentScores:", studentEOYscores)
    }

    render(){
        const compareData = this.compareData();
        console.log(compareData)
        let subjectToShow = "";
        this.state.switchSubject && this.state.subject === "READING" ? subjectToShow = "VIEW MATH SCORES" : this.state.switchSubject && this.state.subject === "MATH" ? subjectToShow = "VIEW READING SCORES" : subjectToShow = "VIEW MATH SCORES"
        return(
            <div className="bar-chart-page">
                <span id="subject-input-bar">
                    <SubjectButton className="subjectB" text={subjectToShow} subjectSwitch={this.switchSubject}/>
                </span>
                <BoyBarChart/>
            </div>
        )
    }
}
export default BarChartPage;