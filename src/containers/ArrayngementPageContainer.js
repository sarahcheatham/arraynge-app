import { connect } from 'react-redux';
import ArrayngementPage from "../components/ArrayngementPage/ArrayngementPage";
import { fetchStudentData } from "../actions";

function mapStateToProps(state){
    return{
        studentdata: state.studentdata
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchStudentData(){
            dispatch(fetchStudentData())
        }
    }
}


const ArrayngementPageContainer = connect(mapStateToProps, mapDispatchToProps)(ArrayngementPage);
export default ArrayngementPageContainer;