import { connect } from "react-redux";
import ClassDataPage from "../components/ClassDataPage";
import { loadUserId, loadClassData, createClassData, setCurrentGradeLevel, setCurrentSubject } from '../actions';

function mapStateToProps(state) {
  return {
    gradelevel: state.gradelevel,
    subject: state.subject,
    userId: state.userId,
    classdata: state.classdata
  };
}

function mapDispatchToProps(dispatch) {
  return {
      loadUserId() {
          dispatch(loadUserId());
      },
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