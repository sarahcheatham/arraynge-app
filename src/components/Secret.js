import React, { Component } from 'react';

class Secret extends Component{
    constructor(props){
        super(props);

        this.state = {
            message: "",
            userId: "",
            students: [],
            lastPost: {
                subject: "",
                gradelevel: ""
            }
        };
        this.renderStudentList = this.renderStudentList.bind(this);
    }

    componentDidMount(){
        fetch("/api/hey").then((res)=>{
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
        fetch("/api/secret").then((res)=>{
            return res.text();
        }).then((data)=>{
            this.setState({
                message: data
            });
        });
        fetch("/api/classdata").then((res)=>{
            return res.json()
        }).then((data)=>{
            const classdata = data.slice();
            const lastPost = classdata.splice(-1)[0];
            if(lastPost.userId = this.state.userId){
                this.setState({lastPost: lastPost, gradelevel: lastPost.gradelevel, subject: lastPost.subject})
            }  
        })
        fetch("/api/studentdata").then((res)=>{
            return res.json()
        }).then((studentdata)=>{
            console.log(studentdata)
            console.log(this.state.lastPost.subject)
            const rightStudents = studentdata.map((item, index)=>{
                if(item.userId === this.state.userId && item.subject === this.state.lastPost.subject){
                    return item
                } 
            })
            const rightStudentCheck = (rightStudents) =>{
                return rightStudents !== undefined
            }
            const rightClassList = rightStudents.filter(rightStudentCheck)
            this.setState({students: rightClassList})
        })
    }
    renderStudentList(){
       
    }
    render(){
        
        return(
            <div>
                <h1>{this.state.message}</h1>
                {this.renderStudentList()}
            </div>
        );
    }
}

export default Secret;