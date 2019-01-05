import { combineReducers } from 'redux';
import state from '../state';

function userId(state="", action){
    if(action.type === "SET_USER_ID"){
        return action.value
    }
    return state;
}

function gradelevel(state="", action){
    if(action.type === "SET_GRADE_LEVEL"){
        return action.value
    }
    return state;
}

function subject(state="", action){
    if(action.type === "SET_SUBJECT"){
        return action.value
    }
    return state;
}

function classdata(state = [],action) {
    if (action.type === "CLASS_DATA_LOADED") {
        return action.value;
    }
    // return [...state];
    return state;
}

function students(state = [], action){
    if(action.type === "STUDENT_DATA_LOADED"){
        return action.value;
    }
    return state;
}

function studentName(state=[], action){
    if(action.type === "SET_STUDENT_NAME"){
        return action.value;
    }
    return state;
}

const rootReducer = combineReducers({
    userId, gradelevel, subject, classdata, students, studentName
});

export default rootReducer;
// export function classdata(state = [], action){
//     console.log('REDUCER: ', action)
//     switch(action.type){
//         case 'POST_CLASS_DATA_LOADING':
//         return {
//             ...state
//         }
//         case 'POST_CLASS_DATA_SUCCESS':
//         return {
//             ...state,
//             classdata: action.data
//     }
//         case 'POST_CLASS_DATA_FAIL':
//         return {
//             ...state,
//             error: action.error
//         }
//         default: 
//             return {...state}
//    }
// }
   
// function classdata(state = [], action){
//     return state;
// }

// function students(state = [], action){
//     return state;
// }
// function users(state = [], action){
//     return state;
// }
