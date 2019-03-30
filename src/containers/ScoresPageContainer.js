import { connect } from 'react-redux';
import ScoresPage from "../components/ScoresPage/ScoresPage";
import { fetchStudentData } from "../actions";

function mapStateToProps(state){
    return{
        studentdata: state.studentdata
    }
}


const ScoresPageContainer = connect(mapStateToProps)(ScoresPage)
export default ScoresPageContainer;