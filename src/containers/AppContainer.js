import { connect } from 'react-redux';
import App from "../App";
import { loadUserId, setCurrentUserId, loadStudentData, loadClassData } from "../actions";

const mapStateToProps = state => {
    return{
        currentUserId: state.currentUserId,
        classdata: {
            loading: state.loading,
            error: state.error,
            classes: state.students
        },
        studentdata: {
            loading: state.loading,
            error: state.error,
            students: state.students
        }
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId: () => dispatch(loadUserId()),
        setCurrentUserId: userId => dispatch(setCurrentUserId(userId)),
        loadClassData: () => dispatch(loadClassData()),
        loadStudentData: () => dispatch(loadStudentData())
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer;