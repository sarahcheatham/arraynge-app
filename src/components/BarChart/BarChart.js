import React from "react";
import BarGroup from './BarGroup';
import './BarChart.css';
import benchmarks from '../../api/benchmarks.json';

class BarChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: "",
      studentdata: [],
      data: [
        { name: 'Below Grade Level', value: 60 },
        { name: 'Above Grade Level', value: 100 },
      ]
    }
  }

  componentDidMount(){
    this.props.loadUserId();
    this.props.fetchStudentData(); 
  }

  componentWillReceiveProps(nextProps){
    const userId = nextProps.userId;
    const studentdata = nextProps.studentdata.students;
    console.log('nextProps:', nextProps, "userId:", userId, 'studentdata:', studentdata)
    this.setState({userId: userId, studentdata: studentdata})
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // Typical usage (don't forget to compare props):
    console.log("prevProps:", prevProps)
    console.log("prevState:", prevState)
    console.log("snapshot:", snapshot)
    console.log("PROPS:", this.props.studentdata.students)
    let students = [];
    if(this.state.studentdata !== undefined){
      const studentdata = this.state.studentdata.slice();
      studentdata.map((student, index)=>{
          if(student.userId === this.state.userId){
            students.push(student)
          }
      })
    }
  }
  
  
  render() {
      // const currentStudents = [];
      // const allStudents = this.props.studentdata.students;
      // const relevantStudentsCheck = (allStudents) =>{
      //   if(allStudents !== null){
      //       return allStudents.userId === this.props.userId
      //   }
      // }

      let barWidth = 20;
      console.log("barWidth:", barWidth)
      let barGroups = this.state.data.map((d, i) => 
        <g transform={`translate(${i * barWidth}, 0)`}>
          <BarGroup d={d} barWidth={barWidth}/>
        </g>
      )                         
      
      return <svg width="500" height="800" >
        <g className="container">
          <text className="title" x="10" y="30">Benchmark Graph</text>
          <g className="chart">
            {barGroups}
          </g>
        </g>
      </svg>
    }
  }
export default BarChart;

