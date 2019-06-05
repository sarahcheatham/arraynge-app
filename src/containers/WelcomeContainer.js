import { connect } from 'react-redux';
import WelcomePage from "../components/Welcome/WelcomePage";
import { loadStudentData } from "../store/actions";

const mapStateToProps = state => {
    return{
        studentdata: {
            loading: state.loading,
            error: state.error,
            students: state.students
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadStudentData: () => dispatch(loadStudentData())
    }
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
export default WelcomeContainer;