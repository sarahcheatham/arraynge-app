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
        e.preventDefault();
        let currentSubject = "";
        const subject = this.state.subject;
        console.log("subject:", subject)
        subject === "READING" ? currentSubject = "MATH" : currentSubject = "READING";
        this.setState({ switchSubject: true, subject: currentSubject })
    }

    getStudentScores(){
        const students = this.state.students;
        const subject = this.state.subject;
        const gradelevel = this.state.gradelevel;

        const filteredStudents = students.filter(student => student.subject === subject && student.gradelevel === gradelevel);
        const studentBOYscores = filteredStudents.map(student => student.score[0].BOYscore);
        const studentEOYgoal = filteredStudents.map(student => student.score[1].EOYgoal);
        const studentMOYscores = filteredStudents.map(student => student.score[2].MOYscore);
        const studentEOYscores = filteredStudents.map(student => student.score[3].EOYscore);
        const studentScores = [
            {"BOYscore" : studentBOYscores}, 
            {"EOYgoal" : studentEOYgoal}, 
            {"MOYscore" : studentMOYscores}, 
            {"EOYscore" : studentEOYscores}
        ];
        return studentScores
    }

    getBenchmarks(){
        let above = [];
        let below = [];
        const students = this.state.students;
        const subject = this.state.subject;
        const gradelevel = this.state.gradelevel;
        
        const filteredBenchmark = benchmarks.filter(benchmark => benchmark.gradelevel === gradelevel.toUpperCase() && benchmark.subject === subject);
        const boyBenchmark = filteredBenchmark.map(benchmark => Math.floor(benchmark.score[0].BOYscore))
        const moyBenchmark = filteredBenchmark.map(benchmark => Math.floor(benchmark.score[1].MOYscore))
        const eoyBenchmark = filteredBenchmark.map(benchmark => Math.floor(benchmark.score[2].EOYscore))
        const bench = [
            {"BOYbench": boyBenchmark},
            {"MOYbench": moyBenchmark},
            {"EOYbench": eoyBenchmark}
        ]
        return bench
    }
    getDataPoints(){
        const getBenchmarks = this.getBenchmarks();
        const studentScores = this.getStudentScores();
        console.log("studentScores:", studentScores)
        console.log("getBenchmarks:", getBenchmarks)
    }

    render(){
        // const getBenchmarks = this.getBenchmarks();
        // console.log("getBenchmarks:", getBenchmarks)
        // const studentScores = this.getStudentScores();
        // console.log("studentScores:", studentScores)
        const dataPoints = this.getDataPoints();
        console.log("dataPoints:", dataPoints)

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