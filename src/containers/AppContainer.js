import { connect } from 'react-redux';
import App from "../App";
import { loadUserId, setCurrentUserId, fetchStudentData, loadClassData } from "../actions";

function mapStateToProps(state){
    return{
        currentUserId: state.currentUserId,
        classdata: state.classdata,
        studentdata: {
            loading: state.loading,
            error: state.error,
            students: state.students
        }
        // studentdata: state.studentdata
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId(){
            dispatch(loadUserId())
        },
        setCurrentUserId(userId){
            dispatch(setCurrentUserId(userId))
        },
        loadClassData(){
            dispatch(loadClassData())
        },
        fetchStudentData(){
            dispatch(fetchStudentData())
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer;