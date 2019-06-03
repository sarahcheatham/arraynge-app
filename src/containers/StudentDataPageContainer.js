import { connect } from 'react-redux';
import StudentDataPage from "../components/StudentDataPage/StudentDataPage";
import { loadUserId, loadClassData, loadStudentData } from "../actions";

const mapStateToProps = state => {
    return{
        currentUserId: state.currentUserId,
        classdata: state.classdata
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUserId: () => dispatch(loadUserId()),
        loadClassData: () => dispatch(loadClassData()),
        loadStudentData: () => dispatch(loadStudentData())
    }
}

const StudentDataPageContainer = connect(mapStateToProps, mapDispatchToProps)(StudentDataPage)
export default StudentDataPageContainer;