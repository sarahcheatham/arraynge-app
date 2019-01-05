import { connect } from "react-redux";
import StudentForm from "../components/StudentForm";
import { loadUserId, loadClassData, createStudentData, setStudentName } from '../actions';

function mapStateToProps(state){
    return {
        // gradelevel: state.gradelevel,
        // subject: state.subject,
        userId: state.userId,
        // classdata: state.classdata,
        // students: state.students
    };
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId(){
            dispatch(loadUserId())
        },
        setStudentName:function(studentName){
            let action = setStudentName(studentName);
            dispatch(action);
        },
        // loadClassData(){
        //     dispatch(loadClassData())
        // },
        // loadStudentData(){
        //     dispatch(loadStudentData())
        // },
        // createStudentData: function(student){
        //     let action = createStudentData(student);
        //     dispatch(action);
        // }

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
const StudentFormContainer = connect(mapStateToProps, mapDispatchToProps)(StudentForm)
export default StudentFormContainer;