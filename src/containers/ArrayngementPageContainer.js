import { connect } from 'react-redux';
import ArrayngementPage from "../components/ArrayngementPage/ArrayngementPage";
import { loadStudentData } from "../store/actions";

const mapStateToProps = state => {
    return{
        // studentdata: {
        //     loading: state.loading,
        //     error: state.error,
        //     students: state.students
        // }
        studentdata: state.studentdata
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadStudentData: () => dispatch(loadStudentData())
    }
}


const ArrayngementPageContainer = connect(mapStateToProps, mapDispatchToProps)(ArrayngementPage);
export default ArrayngementPageContainer;