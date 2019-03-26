import React from "react";
import BarGroup from './BarGroup';
import './BarChart.css';
import SubjectDropMenu from "../ArrayngementPage/DropMenus/SubjectDropMenu";
import benchmarks from '../../api/benchmarks.json';

class BarChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: "",
      students: [],
      gradelevel: "",
      subject: "",
      benchmarks: [],
      benchmark: [],
      data: [
        { name: 'Below Grade Level', value: 60 },
        { name: 'Above Grade Level', value: 100 },
      ]
    }
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
  }

  componentDidMount(){
    this.props.loadUserId();
    fetch('/api/studentdata').then((res)=>{
        return res.json();
    }).then((students)=>{
        const relevantStudentsCheck = (students)=>{
            if(students !== null){
                return students.userId === this.props.userId
            }
        }
        const filteredStudents = students.filter(relevantStudentsCheck);
        const lastStudent = filteredStudents[filteredStudents.length-1];
        const gradelevel = lastStudent.gradelevel;
        const subject = lastStudent.subject;
        this.setState({
          students: filteredStudents,
          gradelevel: gradelevel,
          subject: subject,
          benchmarks: benchmarks
      })
    })
  // console.log("props.subject:", props.subject)
  }
  handleSubjectChange(event){
    console.log("handleSubjectChange:", event)
    this.setState({
        subject: event.subject
    })
}

  // componentWillReceiveProps(nextProps){
  //   const userId = nextProps.userId;
  //   const studentdata = nextProps.studentdata.students;
  //   console.log('nextProps:', nextProps, "userId:", userId, 'studentdata:', studentdata)
  //   this.setState({userId: userId, studentdata: studentdata})
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   Typical usage (don't forget to compare props):
  //   console.log("prevProps:", prevProps)
  //   console.log("prevState:", prevState)
// }
  
  
  render() {
      const bm = benchmarks.filter((benchmark, index)=>{
        if(benchmark.gradelevel === this.state.gradelevel.toUpperCase()){
          return benchmark
        }
      })
      const correctBenchmark = bm.filter((benchmark, index)=>{
        if(this.state.subject === benchmark.subject){
            return benchmark
        }
      })
      const boyBenchmark = correctBenchmark.map((item, index)=>{
        return item.score[0].BOYscore
      })
      console.log("boyBenchmark:", boyBenchmark);
      const moyBenchmark = correctBenchmark.map((item, index)=>{
        return item.score[1].MOYscore
      })
      console.log("moyBenchmark:", moyBenchmark)
      const eoyBenchmark = correctBenchmark.map((item, index)=>{
        return item.score[2].EOYscore
      })
      console.log("eoyBenchmark:", eoyBenchmark)
      let barWidth = 40;
      let barGroups = this.state.data.map((d, i) => 
        <g transform={`translate(${i * barWidth}, 50)`}>
          <BarGroup gradelevel={this.state.gradelevel} subject={this.state.subject} d={d} barWidth={barWidth}/>
        </g>
      )                         
      
      return <div>
          <span className="barchartinputbar">
            <div className="title">{this.state.gradelevel} Benchmark Graph: {this.state.subject}</div>
            <SubjectDropMenu className="barchartsubject" subject={this.state.subject} onSubjectClick={this.handleSubjectChange}/>
          </span>
          <svg width="500" height="800" >
          <g>
            <g className="chart">
              {barGroups}
            </g>
          </g>
        </svg>
      </div>
    }
  }
export default BarChart;

