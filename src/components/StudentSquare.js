import React, {Component} from "react";

class StudentSquare extends Component{
    constructor(){
        super();
        this.state={
            userId: "",
            students: [],
            classdata: {
                gradelevel: "",
                subject: "",
            },
            benchmark: []
        }
    }

    // componentDidMount(){
    //     fetch("/api/hey").then((res)=>{
    //         return res.text()
    //     }).then((userId)=>{
    //         this.setState({userId: userId})
    //     });

    //     fetch("/api/classdata").then((res)=>{
    //         return res.json()
    //     }).then((classdata)=>{
    //         classdata.map((item, index)=>{
    //             if(item.userId === this.state.userId){
    //                 this.setState({classdata: {gradelevel: item.gradelevel, subject: item.subject}})
    //             }
    //         })
    //     });

    //     fetch("/api/studentdata").then((res)=>{
    //         return res.json()
    //     }).then((students)=>{
    //         const relevantStudentsCheck = (students) =>{
    //             if(students !== null){
    //                 return students.userId === this.state.userId
    //             }
    //         }
    //         const relevantStudents = students.filter(relevantStudentsCheck);
    //         let benchmark = "";
    //         this.state.classdata.subject === "READING" ? benchmark = readingBenchmarks : benchmark = mathBenchmarks;
    //         this.setState({
    //             students: relevantStudents,
    //             benchmark: benchmark
    //         });
    //     });
    // }
    
    render(){
        // let colorToShow = "blankSquare";
        return (
            <span className={this.props.className}></span>
        )
    }
}
export default StudentSquare;


// const currentBenchmark = benchmarks.map((item, index)=>{
        //     const subject = item.subject
        //     console.log(subject.toUpperCase() === this.state.subject)
        // })
        // const studentColor = studentArr.map((item, index)=>{
        //     const BOYscore = item.score[0];
        //     const EOYgoal = item.score[1];
        //     const MOYscore = item.score[2];
        //     const EOYscore = item.score[3];
        // })