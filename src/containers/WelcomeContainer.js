import { connect } from 'react-redux';
import WelcomePage from "../components/Welcome/WelcomePage";
import { loadWelcomeMessage, loadLastClass, loadClassData, loadStudentData } from "../store/actions";

const mapStateToProps = state => {
    return{
        welcomeMessage: state.welcomeMessage,
        studentdata: {
            loading: state.loading,
            error: state.error,
            students: state.students
        },
        classdata: {
            loading: state.loading,
            error: state.error,
            classes: state.classes
        },
        currentClass: state.currentClass
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadWelcomeMessage: () => dispatch(loadWelcomeMessage()),
        loadClassData: () => dispatch(loadClassData()),
        loadStudentData: () => dispatch(loadStudentData()),
        loadLastClass: () => dispatch(loadLastClass())
        // loadCurrentClass: id => dispatch(loadCurrentClass(id))
    }
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
export default WelcomeContainer;