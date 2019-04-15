import { connect } from 'react-redux';
import ScoresPage from "../components/ScoresPage/ScoresPage";
import { fetchStudentData } from "../actions";

function mapStateToProps(state){
    return{
        studentdata: state.studentdata
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchStudentData(){
            dispatch(fetchStudentData())
        }
    }
}


const ScoresPageContainer = connect(mapStateToProps, mapDispatchToProps)(ScoresPage)
export default ScoresPageContainer;