import { connect } from 'react-redux';
import StudentDataPage from "../components/StudentDataPage/StudentDataPage";
import { loadUserId, fetchStudentData } from "../actions";

function mapStateToProps(state){
    return{
        currentUserId: state.currentUserId,
        classdata: state.classdata
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

const StudentDataPageContainer = connect(mapStateToProps, mapDispatchToProps)(StudentDataPage)
export default StudentDataPageContainer;