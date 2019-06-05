import React, {Component} from "react";
import Chart from "chart.js";
import benchmarks from '../../api/benchmarks.json';
// import BenchmarkBarChart from './BenchmarkBarChart';
import SubjectButton from './SubjectButton';
import "./BarChart2.css";


class BarChartPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: [],
            gradelevel: "",
            subject: "",
            switchSubject: false,
            bench: [],
            studentScores:[],
            aboveCount: 0,
            belowCount: 0
        }
        this.switchSubject = this.switchSubject.bind(this);
    }
    chartRef = React.createRef();

    componentDidMount(){
        this.props.loadStudentData();
        // this.props.fetchStudentData();
        const students = this.props.studentdata.students;
        const lastStudent = students[students.length-1];
        const gradelevel = lastStudent.gradelevel;
        const subject = lastStudent.subject;
        this.setState({students, gradelevel, subject})
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "bar",
            //Bring in data for the graph
            data:{
                labels: ["Below Grade Level", "Above Grade Level"],
                datasets: [{
                    
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Benchmark Graph",
                    fontSize: 24
                },
                scales: {
                    xAxes: [{
                        type: 'category',
                        labels: ["Below Grade Level", "At or Above Grade Level"]
                    }],
                    yAxes: [{
                        type: 'linear',
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 30,
                            stepSize: 2
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        top: 0,
                        bottom: 50
                    }
                }
            }
        });
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
        this.setState({ studentScores })
        return studentScores
        // return this.state.studentScores
    }

    getBenchmarks(){
        // const students = this.state.students;
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
        this.setState({ bench })
        return bench
        // return this.state.bench
    }
    boyAbove(){
        let above = [];
        const bench = this.getBenchmarks();
        const boyBench = bench[0].BOYbench[0];
        const scores = this.getStudentScores();
        const boyScores = scores[0].BOYscore;
        const aboveScores = boyScores.filter(score => score >= boyBench)
        above.push(aboveScores)
        const aboveCount = above[0].length;
        this.setState({ aboveCount })
        return aboveCount
        // return this.state.aboveCount
    }
    boyBelow(){
        let below = [];
        const bench = this.getBenchmarks();
        const boyBench = bench[0].BOYbench[0];
        const scores = this.getStudentScores();
        const boyScores = scores[0].BOYscore;
        const belowScores = boyScores.filter(score => score < boyBench && score != null);
        below.push(belowScores);
        const belowCount = below[0].length;
        this.setState({ belowCount })
        return belowCount
        // return this.state.belowCount
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("nextProps:", nextProps);
        console.log("nextState:", nextState)
        // if (nextState.open == true && this.state.open == false) {
        //   this.props.onWillOpen();
        // }
    }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("prevProps:", prevProps)
    //     console.log("prevState:", prevState)
    //     // only update chart if the data has changed
    //     // if (prevProps.data !== this.props.data) {
    //     //   this.chart = c3.load({
    //     //     data: this.props.data
    //     //   });
    //     // }
    //   }

    render(){
        // const getBenchmarks = this.getBenchmarks();
        // const studentScores = this.getStudentScores();
        // const boyAbove = this.boyAbove();
        // const boyBelow = this.boyBelow();
        // console.log("boyBelow:", boyBelow)
        // console.log("boyAbove:", boyAbove)
        // console.log("studentScores:", studentScores)
        // console.log("getBenchmarks:", getBenchmarks)
       

        let subjectToShow = "";
        this.state.switchSubject && this.state.subject === "READING" ? subjectToShow = "VIEW MATH SCORES" : this.state.switchSubject && this.state.subject === "MATH" ? subjectToShow = "VIEW READING SCORES" : subjectToShow = "VIEW MATH SCORES"
        return(
            <div className="bar-chart-page">
                <span id="subject-input-bar">
                    <SubjectButton className="subjectB" text={subjectToShow} subjectSwitch={this.switchSubject}/>
                </span>
                <div className="graphContainer" style={{position: "relative", height: "100vh", width: "80vw"}}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
                {/* <BenchmarkBarChart below={boyBelow} above={boyAbove}/> */}
            </div>
        )
    }
}
export default BarChartPage;