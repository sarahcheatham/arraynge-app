import React, {Component} from "react";
// import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { loadClassData, createClassData } from '../actions';
import { connect } from "react-redux";
import { loadUserId } from '../actions';

class ClassDataPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            classdata: {
                userId: "",
                gradelevel: "",
                subject: ""
            }
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.gradeLevelClick = this.gradeLevelClick.bind(this);
        this.subjectClick = this.subjectClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    componentDidMount(){
        this.props.loadUserId();
    }

    showMenu(event){
        event.preventDefault();
        this.setState({ showMenu: true}, ()=>{
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event){
        if(!this.dropdownMenu.contains(event.target)){
            this.setState({ showMenu: false}, ()=>{
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    gradeLevelClick(event){
        event.preventDefault();
        const classdata = {gradelevel: event.target.value};
        this.props.setGradeLevel(event.target.value)
        this.setState({
            classdata: Object.assign(this.state.classdata, classdata)
        })
    }

    subjectClick(event){
        event.preventDefault();
        const classdata = {subject: event.target.value};
        this.props.setSubject(event.target.value)
        this.setState({
            classdata: Object.assign(this.state.classdata, classdata),
        })
    }

    handleSubmit(event){
        console.log(event);
        event.preventDefault();
        const classdata = {userId: this.props.userId};
        this.setState({
            classdata: Object.assign(this.state.classdata, classdata)
        })
        this.props.createClassData(this.state.classdata)
        // const userId = this.state.userId;
        // const gradelevel = this.state.gradelevel;
        // const subject = this.state.subject;
        // const data = {
        //     userId,
        //     gradelevel,
        //     subject
        // }
        // this.props.createClassData();
        // let options = {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
            // body: JSON.stringify({gradelevel, subject, userId})
        // }
        // fetch("/api/classdata", options).then((res)=>{
        //     return res.json();
        // }).then((data)=>{
        //     console.log(data)
        // }).catch((err)=> {
        //     console.log(err)
        // })
        // this.props.postData(data)
        // this.props.createClassData();
    }
    
    render(){
        const styles = {
            color: 'black',
            textDecoration: 'none'
        }
        let whatToShow = "SHOW GRADE LEVELS";
        // if(this.props.c){
        //     whatToShow = this.state.grade;
        // } else {
        //     whatToShow = "SHOW GRADE LEVELS";
        // }
        // if(this.props.currentGradeLevel ===""){
        //     whatToShow = this.state.gradelevel;
        //     whatToShow = this.props.currentGradeLevel;
        //     console.log('here')
        //     if(this.state.showMenu === true){
        //         whatToShow = "SHOW GRADE LEVELS"
        //     }
        // }
        return(
            // <form className="classDataPage" onSubmit={(e)=>{
            //     e.preventDefault();
            //     if(this.props.createClassData){
            //         this.props.createClassData(this.state.classdata)
            //     }
            // }}>
            <form className="classDataPage">
                <div className="classDataPageHeader">
                    <SubHeader text="ENTER CLASS DATA"/>
                </div>
                <span className="gradeLevel">
                    <p className="classDataSubHeader">GRADE LEVEL</p>
                    <p className="classDataText">Choose the grade level that you would like to arraynge</p>
                </span>
                {/* <DropMenu className="dropMenuContainer"/> */}
                <div className="dropMenuContainer">
                    <Button onClick={this.showMenu} className='mainDropMenuButton'>
                        {whatToShow}
                    </Button>
                    {
                        this.state.showMenu 
                        ?
                        (
                            <div 
                                className='dropMenu'
                                ref = {(element)=>{
                                    this.dropdownMenu = element;
                                }}
                            >
                                <Button className='grades' onClick={this.gradeLevelClick} value="Kindergarten">Kindergarten</Button>
                                <Button className='grades' onClick={this.gradeLevelClick} value="First Grade">First Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick} value="Second Grade">Second Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick} value="Third Grade">Third Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick} value="Fourth Grade">Fourth Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick} value="Fifth Grade">Fifth Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick} value="Sixth Grade">Sixth Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick} value="Seventh Grade">Seventh Grade</Button>
                                <Button className='grades' onClick={this.gradeLevelClick} value="Eigth Grade">Eigth Grade</Button>
                            </div>
                        ) 
                        : (
                            null
                        )
                    }
                </div>
                <span className="subject">
                    <p className="classDataSubHeader">SUBJECT</p>
                    <p className="classDataText">Choose the subject that you would like to arraynge</p>
                    <div className="subjectButtons">
                        <Button type="button" className="mathButton" onClick={this.subjectClick} value="MATH">
                            MATH
                        </Button>
                        <Button type="button" className="readingButton" onClick={this.subjectClick} value="READING">
                            READING
                        </Button>
                    </div>
                </span>
                <Link to={'/studentdata'} style={styles} className="classdatabutton">
                    <Button type="submit" className="classdatabutton" onClick={this.handleSubmit}>
                    {/* <Button type="submit" className="classdatabutton"> */}
                        SAVE
                    </Button>
                </Link>
            </form>
        )
    }
}
function mapStateToProps(state) {
    return {
      gradelevel: state.currentGradeLevel,
      subject: state.currentSubject,
      userId: state.currentUserId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserId() {
            dispatch(loadUserId());
        }
    };
}
   
// function mapDispatchToProps (dispatch){
//     return{
//         loadClassData(){
//             dispatch(loadClassData())
//         }
//     }
// }

// function mapStateToProps(state) {
//     return {
//       classdata: state.classdata
//     };
// }
// function mapStateToProps(state) {
//     return {
//       classdata: state.classdata
//     };
// }

// function mapDispatchToProps(dispatch){
//     return {
//         loadClassData(){
//             dispatch(loadClassData())
//         },
//         createClassData(classdata){
//             dispatch(createClassData(classdata))
//         }
//     }
// }
// ClassDataPage.propTypes = {
//     onGradeLevelClick: PropTypes.func.isRequired,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ClassDataPage);
// export default (ClassDataPage);

const ClassDataPageContainer= connect(mapStateToProps, mapDispatchToProps)(ClassDataPage);
export default ClassDataPageContainer