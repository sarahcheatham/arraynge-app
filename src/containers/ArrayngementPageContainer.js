import { connect } from 'react-redux';
import ArrayngementPage from "../components/ArrayngementPage/ArrayngementPage";
import { loadStudentData } from "../actions";

function mapStateToProps(state){
    return{
        studentdata: state.studentdata
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadStudentData(){
            dispatch(loadStudentData())
        }
    }
}


const ArrayngementPageContainer = connect(mapStateToProps, mapDispatchToProps)(ArrayngementPage);
export default ArrayngementPageContainer;