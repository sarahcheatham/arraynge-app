import { connect } from "react-redux";
import ClassDataPage from "../components/ClassDataPage/ClassDataPage";
import { loadClassData, createClassData, setCurrentGradeLevel, setCurrentSubject } from '../actions';

function mapStateToProps(state) {
  return {
    currentUserId: state.currentUserId,
    gradelevel: state.currentGradeLevel,
    subject: state.currentSubject,
    classdata: state.currentClassdata
  };
}

function mapDispatchToProps(dispatch) {
  return {
      loadClassData(){
        dispatch(loadClassData())
      },
      setGradeLevel:function(gradelevel){
          let action = setCurrentGradeLevel(gradelevel);
          dispatch(action);
      },
      setSubject:function(subject){
          let action = setCurrentSubject(subject);
          dispatch(action);
      },
      createClassData:function(classdata){
          let action = createClassData(classdata);
          dispatch(action);
      }
  };
}

const ClassDataPageContainer =  connect(mapStateToProps, mapDispatchToProps)(ClassDataPage);

export default ClassDataPageContainer;