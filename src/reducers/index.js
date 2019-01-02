import { combineReducers } from 'redux';

function users(state = [], action){
    return state;
}

function classdata(state = [], action){
    return state;
}

function students(state = [], action){
    return state;
}
const rootReducer = combineReducers({
    users, classdata, students
});

export default rootReducer;