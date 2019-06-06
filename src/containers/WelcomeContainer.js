import { connect } from 'react-redux';
import WelcomePage from "../components/Welcome/WelcomePage";
import { loadClassData, loadStudentData } from "../store/actions";

const mapStateToProps = state => {
    return{
        studentdata: {
            loading: state.loading,
            error: state.error,
            students: state.students
        },
        classdata: {
            loading: state.loading,
            error: state.error,
            classes: state.classes
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadClassData: () => dispatch(loadClassData()),
        loadStudentData: () => dispatch(loadStudentData())
    }
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
export default WelcomeContainer;