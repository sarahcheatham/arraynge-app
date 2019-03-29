import { connect } from 'react-redux';
import ScoresPage from "../components/ScoresPage/ScoresPage";
import { loadUserId, fetchStudentData } from "../actions";

function mapStateToProps(state){
    return{
        currentUserId: state.currentUserId,
        studentdata: state.studentdata,
        loading: state.loading,
        error: state.error 
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId(){
            dispatch(loadUserId())
        },
        fetchStudentData(){
            dispatch(fetchStudentData())
        }
    }
}

const ScoresPageContainer = connect(mapStateToProps, mapDispatchToProps)(ScoresPage)
export default ScoresPageContainer;