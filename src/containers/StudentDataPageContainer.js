import { connect } from 'react-redux';
import StudentDataPage from "../components/StudentDataPage/StudentDataPage";
import { loadUserId, loadClassData, loadStudentData } from "../store/actions";

const mapStateToProps = state => {
    return{
        currentUserId: state.currentUserId,
        classdata: {
            loading: state.loading,
            error: state.error,
            classes: state.classes
        },
        studentdata: {
            loading: state.loading,
            error: state.error,
            students: state.students
        } 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUserId: () => dispatch(loadUserId()),
        loadClassData: () => dispatch(loadClassData()),
        loadStudentData: () => dispatch(loadStudentData()),
    }
}

const StudentDataPageContainer = connect(mapStateToProps, mapDispatchToProps)(StudentDataPage)
export default StudentDataPageContainer;