import { connect } from 'react-redux';
import ArrayngementPage from "../components/ArrayngementPage/ArrayngementPage";

function mapStateToProps(state){
    return{
        studentdata: state.studentdata
    }
}


const ArrayngementPageContainer = connect(mapStateToProps)(ArrayngementPage);
export default ArrayngementPageContainer;