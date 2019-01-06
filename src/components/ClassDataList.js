import React, {Component} from "react";
// import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ClassDataList extends Component{
    constructor(){
        super();
        this.state={
            userId: "",
            classdata: [],
            header: "",
            gradelevel: "",
            subject: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        fetch("/api/hey").then((res)=>{
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
        fetch("/api/classdata")
        .then(res=> res.json())
        .then(classdata => {
            this.setState({ classdata })
        })
        fetch("/api/secret").then((res)=>{
            return res.text()
        }).then((header)=>{
            this.setState({ header })
        });
    }

    handleClick(event){
        const buttonText = event.target.innerHTML.split(" ");
        const gradelevel = buttonText[0];
        const subject = buttonText[1];
        const userId = this.state.userId;
        this.setState({gradelevel: gradelevel, subject: subject})
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ userId, gradelevel, subject })
        }
        fetch("/api/classdata", options).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
 
    render(){
        const classdata = this.state.classdata.slice();
        const rightUserId = classdata.map((item, index)=>{
            if(item.userId === this.state.userId){
                return item
            } 
        })
        const rightUserCheck = (rightUserId) =>{
            return rightUserId !== undefined
        }
        const usersClassList = rightUserId.filter(rightUserCheck)
        return(
            <div>
                <SubHeader text={this.state.header} className="classDataListHeader"/>
                <ul className="usersclassList">
                    {usersClassList.map((item, index)=>{
                        return (<li key={index}><Link to={"/secret"}><button className="usersclasslistbutton" onClick={this.handleClick}>{item.gradelevel.toUpperCase()}{" "}{item.subject}</button></Link></li>)
                    })}
                </ul>
            </div>
        )
    }
}

// ClassDataList.propTypes ={
//     onStudentListView: PropTypes.func.isRequired
// };

export default ClassDataList