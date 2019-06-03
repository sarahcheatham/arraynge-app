import { connect } from 'react-redux';
import ScoresPage from "../components/ScoresPage/ScoresPage";
import { loadStudentData } from "../actions";

const mapStateToProps = state => {
    return {
        studentdata: state.studentdata
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadStudentData(){
            dispatch(loadStudentData())
        }
    }
}


const ScoresPageContainer = connect(mapStateToProps, mapDispatchToProps)(ScoresPage)
export default ScoresPageContainer;