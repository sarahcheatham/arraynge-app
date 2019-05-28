import { connect } from "react-redux";
import ClassDataPage from "../components/ClassDataPage/ClassDataPage";
import { loadClassData, createClassData, setCurrentGradeLevel, setCurrentSubject, fetchStudentData } from '../actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId,
    gradelevel: state.currentGradeLevel,
    subject: state.currentSubject,
    classdatadata: {
      loading: state.loading,
      error: state.error,
      classes: state.classes
  }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadClassData(){
      dispatch(loadClassData())
    },
    fetchStudentData(){
      dispatch(fetchStudentData())
    },
    setGradeLevel: gradelevel => {
      let action = setCurrentGradeLevel(gradelevel);
      dispatch(action);
    },
    setSubject: subject => {
      let action = setCurrentSubject(subject);
      dispatch(action);
    },
    createClassData: classdata => {
      let action = createClassData(classdata);
      dispatch(action);
    }
  };
}

const ClassDataPageContainer = connect(mapStateToProps, mapDispatchToProps)(ClassDataPage);

export default ClassDataPageContainer;