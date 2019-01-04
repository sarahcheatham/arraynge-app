import { connect } from "react-redux";
import ClassDataPage from "../components/ClassDataPage";
import { loadClassData, createClassData, setCurrentGradeLevel, setCurrentSubject } from '../actions';

function mapDispatchToProps(dispatch){
  return {
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
  }
}


// function mapDispatchToProps(dispatch){
//   return {
//       loadClassData(){
//           dispatch(loadClassData())
//       },
//       createClassData: function(classdata){
//           dispatch(createClassData(classdata))
//       }
//   }
// }

const ClassDataPageContainer =  connect(null, mapDispatchToProps)(ClassDataPage);

export default ClassDataPageContainer;