import { connect } from 'react-redux';
import WelcomePage from "../components/Welcome/WelcomePage";
import { fetchStudentData } from "../actions";

function mapStateToProps(state){
    return{
        currentUserId: state.currentUserId,
        students: state.students
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchStudentData(userId){
            dispatch(fetchStudentData(userId))
        }
    }
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
export default WelcomeContainer;