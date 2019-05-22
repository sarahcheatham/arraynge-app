import React, {Component} from "react";
import benchmarks from '../../api/benchmarks.json';
import SubjectDropMenu from "../ArrayngementPage/DropMenus/SubjectDropMenu";
import BarChart2 from './BarChart2';

class BarChartPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: [],
            gradelevel: "",
            subject: "",
            sortBy: ""
        }

    }

    componentDidMount(){
        const students = this.props.studentdata.students;
        const lastStudent = students[students.length-1];
        const gradelevel = lastStudent.gradelevel;
        const subject = lastStudent.subject;
        this.setState({students, gradelevel, subject})
    }

    // handleSubjectChange(event){
    //     this.setState({
    //         subject: event.subject
    //     })
    // }

    compareData(){
        const students = this.state.students;
        const subject = this.state.subject;
        const gradelevel = this.state.gradelevel;
        const filteredStudents = students.filter(student => student.subject === subject && student.gradelevel === gradelevel)
        console.log("filteredStudents:", filteredStudents)

        
    }

    render(){
        const compareData = this.compareData();
        console.log(compareData)
        return(
            <div className="bar-chart-page">
                <SubjectDropMenu className="barchartsubject" subject={this.state.subject} onSubjectClick={this.handleSubjectChange}/>
                <BarChart2/>
            </div>
        )
    }
}
export default BarChartPage;