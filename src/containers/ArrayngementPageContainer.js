import { connect } from 'react-redux';
import ArrayngementPage from "../components/ArrayngementPage";
import { loadUserId } from "../actions";

function mapStateToProps(state){
    return{
        userId: state.currentUserId
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId(){
            dispatch(loadUserId())
        }
    }
}

const ArrayngementPageContainer = connect(mapStateToProps, mapDispatchToProps)(ArrayngementPage)
export default ArrayngementPageContainer;