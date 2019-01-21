import { combineReducers } from 'redux';
import state from '../state';

function currentUserId(state="", action){
    if(action.type === "SET_USER_ID"){
        return action.value
    }
    return state;
}

function currentGradeLevel(state="", action){
    if(action.type === "SET_GRADE_LEVEL"){
        return action.value
    }
    return state;
}

function currentSubject(state="", action){
    if(action.type === "SET_SUBJECT"){
        return action.value
    }
    return state;
}

function classdata(state = [],action) {
    if (action.type === "CLASS_DATA_LOADED") {
        return action.value;
    }
    return state;
}

function numberOfStudents(state = 0, action){
    if(action.type === "SET_NUMBER_OF_STUDENTS"){
        return action.value;
    }
    return state;
}


const rootReducer = combineReducers({
    currentUserId, currentGradeLevel, currentSubject, classdata, numberOfStudents
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
