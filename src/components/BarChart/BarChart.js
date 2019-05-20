import React from "react";
import './BarChart.css';
import BarGroup from './BarGroup';
import BarChartTable from './BarChartTable';
import SubjectDropMenu from "../ArrayngementPage/DropMenus/SubjectDropMenu";
import ArrayngementDropMenu from "../ArrayngementPage/DropMenus/ArrayngementDropMenu";
import benchmarks from '../../api/benchmarks.json';
import { Table } from 'react-bootstrap';

class BarChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      students: [],
      gradelevel: "",
      subject: "",
      sortBy: "",
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
    this.setState({
        subject: event.subject
    })
  }

  handleSortBy(event){
    this.setState({
        sortBy: event.sortBy
    });
  }

  //hash table that aligns with where to locate the score by the time of year
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

  //function to find the benchmark that matches the grade level and subject
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

    //rounds the benchmark down to nearest integer based on decimal
    if(benchmark[0] !== undefined){
        boyBenchmark = Math.floor(benchmark[0].score[0].BOYscore);
        moyBenchmark = Math.floor(benchmark[0].score[1].MOYscore);
        eoyBenchmark = Math.floor(benchmark[0].score[2].EOYscore);
    }

    //hash table that uses the correct benchmark when the sortBy changes via the drop down menu
    const bench = {
      "BOY score": boyBenchmark,
      "MOY score": moyBenchmark,
      "EOY score": eoyBenchmark,
      "EOY goal": eoyBenchmark
    }
    return bench[sortBy]
  }

  //only gets the students test scores that have an entry for the subject via the drop down menu
  filterBySubject(subject){
    const students = this.props.studentdata.students;
    const filterStudents = students.filter((student, index)=>{
        if(student.subject === subject){
          return student
        }
    })
    return filterStudents
  }

  //compares the student score to the bench and increases the count if the student is above or below the benchmark
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
      }
    })
    graphData.push(belowGradeLevel, aboveGradeLevel)
    return graphData
  }
  
  render() {
      const bench = this.getBenchmarkForCount(this.state.sortBy);
      const students = this.filterBySubject(this.state.subject);
      const graphData = this.compareStudentScore(students, bench);
      const barWidth = 100;
      const below = graphData[0];
      const above = graphData[1];

      let barGroups = graphData.map((data, index)=>
        <g transform={`translate(${(index + 2) * barWidth - 50}, 75)`} key={index}>
          <BarGroup gradelevel={this.state.gradelevel} subject={this.state.subject} data={data} barWidth={barWidth} index={index}/>
        </g>
      )

      return <div>
          <span className="barchartinputbar">
            <div className="title">{this.state.gradelevel} Benchmark Graph: {this.state.subject}</div>
            <SubjectDropMenu className="barchartsubject" subject={this.state.subject} onSubjectClick={this.handleSubjectChange}/>
            <ArrayngementDropMenu className="barchartdropmenu" onSortBy={this.handleSortBy}/>
          </span>
          <svg width="425" height="325" >
          <g>
            <g className="chart">
              {barGroups}
            </g>
          </g>
        </svg>
        <BarChartTable below={below} above={above}/>
      </div>
    }
}
export default BarChart;

