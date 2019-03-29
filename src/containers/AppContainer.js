import { connect } from 'react-redux';
import App from "../App";
import { loadUserId, setCurrentUserId } from "../actions";

function mapStateToProps(state){
    return{
        currentUserId: state.currentUserId,
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUserId(){
            dispatch(loadUserId())
        },
        setCurrentUserId(userId){
            dispatch(setCurrentUserId(userId))
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer;