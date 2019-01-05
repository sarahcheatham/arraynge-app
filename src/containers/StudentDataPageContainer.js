import { connect } from "react-redux";
import StudentDataPage from "../components/StudentDataPage";
import { loadUserId, loadClassData, setCurrentGradeLevel, setCurrentSubject, loadStudentData, createStudentData } from '../actions';


function mapStateToProps(state){
    return {
        // gradelevel: state.gradelevel,
        // subject: state.subject,
        userId: state.userId,
        classdata: state.classdata,
        students: state.students
    };
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId(){
            dispatch(loadUserId())
        },
        loadClassData(){
            dispatch(loadClassData())
        },
        loadStudentData(){
            dispatch(loadStudentData())
        },
        createStudentData: function(student){
            let action = createStudentData(student);
            dispatch(action);
        }

        // setGradeLevel: function(gradelevel){
        //     let action = setCurrentGradeLevel(gradelevel);
        //     dispatch(action);
        // },
        // setSubject: function(subject){
        //     let action = setCurrentSubject(subject);
        //     dispatch(action);
        // },
       
    }
}

// const StudentDataPageContainer = connect(mapStateToProps, mapDispatchToProps)(StudentDataPage);
const StudentDataPageContainer = connect(mapStateToProps, mapDispatchToProps)(StudentDataPage)
export default StudentDataPageContainer;