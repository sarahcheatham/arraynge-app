import { connect } from 'react-redux';
import ArrayngementPage from "../components/ArrayngementPage/ArrayngementPage";
import { loadUserId, fetchStudentData } from "../actions";

function mapStateToProps(state){
    return{
        userId: state.currentUserId,
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

const ArrayngementPageContainer = connect(mapStateToProps, mapDispatchToProps)(ArrayngementPage)
export default ArrayngementPageContainer;