import React from "react";
import BarGroup from './BarGroup';
import './BarChart.css';
import SubjectDropMenu from "../ArrayngementPage/DropMenus/SubjectDropMenu";
import ArrayngementDropMenu from "../ArrayngementPage/DropMenus/ArrayngementDropMenu";
import benchmarks from '../../api/benchmarks.json';
import { Table } from 'react-bootstrap';

class BarChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: "",
      students: [],
      gradelevel: "",
      subject: "",
      sortBy: "",
      correctBenchmark: [],
      boyBenchmark: [],
      moyBenchmark: [],
      eoyBenchmark: [],
      data: [
        { name: 'Below Grade Level', value: 60 },
        { name: 'Above Grade Level', value: 100 },
      ]
    }
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this)
  }

  componentDidMount(){
    const students = this.props.studentdata.students;
    const lastStudent = students[students.length-1];
    const gradelevel = lastStudent.gradelevel;
    const subject = lastStudent.subject;
    this.setState({students, gradelevel, subject})
  }

  handleSubjectChange(event){
    console.log("handleSubjectChange:", event)
    this.setState({
        subject: event.subject
    })
  }

  handleSortBy(event){
    // console.log("handleSortBy:", event)
    this.setState({
        sortBy: event.sortBy
    });
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
  getBenchmarkForCount(sortBy){
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
    const bench = {
      "BOY score": boyBenchmark,
      "MOY score": moyBenchmark,
      "EOY score": eoyBenchmark,
      "EOY goal": eoyBenchmark
    }
    return bench[sortBy]
  }

  filterBySubject(subject){
    const students = this.props.studentdata.students;
    const filterStudents = students.filter((student, index)=>{
        if(student.subject === subject){
          return student
        }
    })
    return filterStudents
  }
  compareStudentScore(students, bench){
    const sortBy = this.state.sortBy;
    let aboveGradeLevel = 0;
    let belowGradeLevel = 0;
    const graphData = [];
    const filterByScore = students.filter((student, index)=>{
      const studentScore = {
        "BOY score": student.score[0].BOYscore,
        "MOY score": student.score[2].MOYscore,
        "EOY score": student.score[3].EOYscore,
        "EOY goal": student.score[1].EOYgoal
      }
      if(studentScore[sortBy] !== undefined && bench !== undefined){
        if(studentScore[sortBy] >= bench){
          aboveGradeLevel++
        } else if(studentScore[sortBy] < bench){
          belowGradeLevel++
        }
        console.log("studentScore:",studentScore[sortBy])
        console.log("bench:", bench)
      }
    })
    graphData.push(belowGradeLevel, aboveGradeLevel)
    return graphData
  }
  

  render() {
      const bench = this.getBenchmarkForCount(this.state.sortBy);
      console.log("bench:", bench)
      const students = this.filterBySubject(this.state.subject);
      console.log("students:", students)
      const graphData = this.compareStudentScore(students, bench);
      console.log("graphData:", graphData)
      let barWidth = 100;
      let barGroups = graphData.map((d, i)=>
        <g transform={`translate(${i * barWidth - 35}, 50)`} key={i}>
          <BarGroup gradelevel={this.state.gradelevel} subject={this.state.subject} d={d} barWidth={barWidth}/>
        </g>
      )
      // let barGroups = this.state.data.map((d, i) => 
      //   <g transform={`translate(${i * barWidth}, 50)`} key={i}>
      //     <BarGroup gradelevel={this.state.gradelevel} subject={this.state.subject} d={d} barWidth={barWidth}/>
      //   </g>
      // )                         
      
      return <div>
          <span className="barchartinputbar">
            <div className="title">{this.state.gradelevel} Benchmark Graph: {this.state.subject}</div>
            <SubjectDropMenu className="barchartsubject" subject={this.state.subject} onSubjectClick={this.handleSubjectChange}/>
            <ArrayngementDropMenu className="arrayngementdropmenu" onSortBy={this.handleSortBy}/>
          </span>
          <svg width="500" height="400" >
          <g>
            <g className="chart">
              {barGroups}
            </g>
          </g>
        </svg>
        <Table>
          <thead>
            <th className="graphTable">Below Grade Level</th>
            <th className="graphTable">At or Above Grade Level</th>
          </thead>
        </Table>
      </div>
    }
  }
export default BarChart;

