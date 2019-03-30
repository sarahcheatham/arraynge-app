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

  static getDerivedStateFromProps(props, state){
    const bm = benchmarks.filter((benchmark, index)=>{
      if(benchmark.gradelevel === state.gradelevel.toUpperCase()){
        return benchmark
      }
    })
    console.log("bm:", bm)
    const correctBenchmark = bm.filter((benchmark, index)=>{
      if(state.subject === benchmark.subject){
        return benchmark
      }
    })
    console.log("correctBenchmark:", correctBenchmark)
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
    // this.setState({correctBenchmark})
    console.log("props:", props)
    console.log("state:", state)
    return state
  }

  // componentWillReceiveProps(nextProps){
    // console.log("nextProps:", nextProps)
    // const userId = nextProps.userId;
    // const studentdata = nextProps.studentdata.students;
    // console.log('nextProps:', nextProps, "userId:", userId, 'studentdata:', studentdata)
    // this.setState({userId: userId, studentdata: studentdata})
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   Typical usage (don't forget to compare props):
  //   console.log("prevProps:", prevProps)
  //   console.log("prevState:", prevState)
// }
  render() {
      let barWidth = 40;
      let barGroups = this.state.data.map((d, i) => 
        <g transform={`translate(${i * barWidth}, 50)`} key={i}>
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

