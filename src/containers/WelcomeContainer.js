import { connect } from 'react-redux';
import WelcomePage from "../components/Welcome/WelcomePage";
import { loadClassData, loadStudentData, loadCurrentClass } from "../store/actions";

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
        },
        currentClass: {
            loading: state.loading,
            error: state.error,
            curr: state.curr
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadClassData: () => dispatch(loadClassData()),
        loadStudentData: () => dispatch(loadStudentData()),
        loadCurrentClass: id => dispatch(loadCurrentClass(id))
    }
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
export default WelcomeContainer;