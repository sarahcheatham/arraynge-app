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
      data: [
        { name: 'Below Grade Level', value: 60 },
        { name: 'Above Grade Level', value: 100 },
      ],
      benchmarks: []
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
        this.setState({
          students: filteredStudents,
          gradelevel: gradelevel,
          benchmarks: benchmarks
      })
    })
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
  //   // Typical usage (don't forget to compare props):
  //   // console.log("prevProps:", prevProps)
  //   // console.log("prevState:", prevState)
  //   // const bm = benchmarks.find((benchmark)=>{
  //   //   console.log(benchmark.gradelevel === this.state.gradelevel)
  //   // })
  //   // if(this.props.studentdata.students !== undefined){
  //   //   const studentdata = this.props.studentdata.students.slice();
  //   //   const relevantStudentsCheck = (student) =>{
  //   //     return student.userId === this.state.userId
  //   //   }
  //   //   const filteredStudents = studentdata.filter(relevantStudentsCheck);
  //   //   console.log('filteredStudents', filteredStudents)
  //   // }
  // }
  
  
  render() {
      console.log(this.state.students)
      let barWidth = 40;
      console.log("barWidth:", barWidth)
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

