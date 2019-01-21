import { connect } from 'react-redux';
import StudentDataPage from "../components/StudentDataPage";
import { setNumberOfStudents } from "../actions";

function mapDispatchToProps(dispatch){
    return {
        numberOfStudents: function(numberOfStudents){
            let action = setNumberOfStudents(numberOfStudents);
            dispatch(action);
        }
    }
}

const StudentDataPageContainer = connect(null, mapDispatchToProps)(StudentDataPage)
export default StudentDataPageContainer;