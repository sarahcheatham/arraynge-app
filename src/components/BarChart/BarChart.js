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
      students: [],
      data: [
        { name: 'Below Grade Level', value: 60 },
        { name: 'Above Grade Level', value: 100 },
      ]
    }
  }

  componentDidMount(){
    this.props.loadUserId();
    this.props.fetchStudentData(); 
    console.log("mount:", this.props.userId)
  }

  componentWillReceiveProps(nextProps){
    const userId = nextProps.userId;
    const studentdata = nextProps.studentdata.students;
    console.log('nextProps:', nextProps, "userId:", userId, 'studentdata:', studentdata)
    this.setState({userId: userId, studentdata: studentdata})
  }
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    console.log("prevProps:", prevProps)
    console.log("prevState:", prevState)
    if(this.props.studentdata.students !== undefined){
      const studentdata = this.props.studentdata.students.slice();
      const relevantStudentsCheck = (student) =>{
        return student.userId === this.state.userId
      }
      const filteredStudents = studentdata.filter(relevantStudentsCheck);
      console.log('filteredStudents', filteredStudents)
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

