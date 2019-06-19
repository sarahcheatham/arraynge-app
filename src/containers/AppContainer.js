import { connect } from 'react-redux';
import App from "../App";
import { loadUserId, setCurrentUserId, setWelcomeMessage, loadStudentData, loadClassData } from "../store/actions";

const mapStateToProps = state => {
    return{
        currentUserId: state.currentUserId,
        welcomeMessage: state.welcomeMessage,
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
        setWelcomeMessage: welcomeMessage => dispatch(setWelcomeMessage(welcomeMessage)),
        loadClassData: () => dispatch(loadClassData()),
        loadStudentData: () => dispatch(loadStudentData())
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer;