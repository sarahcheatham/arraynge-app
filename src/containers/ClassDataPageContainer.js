import { connect } from "react-redux";
import ClassDataPage from "../components/ClassDataPage/ClassDataPage";
import { loadClassData, createClassData, setCurrentGradeLevel, setCurrentSubject, loadStudentData } from '../store/actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId,
    gradelevel: state.currentGradeLevel,
    subject: state.currentSubject,
    classdata: {
      loading: state.loading,
      error: state.error,
      classes: state.classes
    },
    studentdata: {
      loading: state.loading,
      error: state.error,
      students: state.students
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadClassData: () => dispatch(loadClassData()),
    loadStudentData: () => dispatch(loadStudentData()),
    setGradeLevel: gradelevel => dispatch(setCurrentGradeLevel(gradelevel)),
    setSubject: subject => dispatch(setCurrentSubject(subject)),
    createClassData: classdata => dispatch(createClassData(classdata))
  };
}

const ClassDataPageContainer = connect(mapStateToProps, mapDispatchToProps)(ClassDataPage);
export default ClassDataPageContainer;