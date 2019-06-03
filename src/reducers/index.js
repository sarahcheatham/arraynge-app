import storeState from '../state';
import { combineReducers } from 'redux';
import { 
    FETCH_STUDENTDATA_BEGIN,
    FETCH_STUDENTDATA_SUCCESS,
    FETCH_STUDENTDATA_FAILURE,
    FETCH_CLASSDATA_BEGIN,
    FETCH_CLASSDATA_SUCCESS,
    FETCH_CLASSDATA_FAILURE
} from '../actions/index';
// import state from '../state';

const currentUserId = (state = "", action) => {
    if(action.type === "SET_USER_ID"){
        return action.value
    }
    return state;
}

const currentGradeLevel = (state = "", action) => {
    if(action.type === "SET_GRADE_LEVEL"){
        return action.value
    }
    return state;
}

const currentSubject = (state = "", action) => {
    if(action.type === "SET_SUBJECT"){
        return action.value
    }
    return state;
}

const numberOfStudents = (state = 0, action) => {
    if(action.type === "SET_NUMBER_OF_STUDENTS"){
        return action.value;
    }
    return state;
}

const classdata = (state = storeState, action) => {
    console.log("REDUCER:", action)
    console.log("STATE:", state)
    console.log("STORE STATE:", storeState)
    switch(action.type){
        case FETCH_CLASSDATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_CLASSDATA_SUCCESS:
            return {
                ...state,
                loading: false, 
                classes: action.payload.classes
            };
        case FETCH_CLASSDATA_FAILURE:
            return {
                ...state, 
                loading: false,
                error: action.payload.error,
                classes: []
            };
        default:
            return state;
            // return {...state};
    }
}

// const initialState = {
//     students: [],
//     loading: false,
//     error: null
// };

const studentdata = (state = storeState, action) => {
    // console.log("REDUCER:", action)
    // console.log("STATE:", state)
    // console.log("STORE STATE:", storeState)
    switch(action.type){
        case FETCH_STUDENTDATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_STUDENTDATA_SUCCESS:
            return {
                ...state,
                loading: false, 
                students: action.payload.students
            };
        case FETCH_STUDENTDATA_FAILURE:
            return {
                ...state, 
                loading: false,
                error: action.payload.error,
                students: []
            };
        default:
            return state;
            // return {...state};
    }
}



const rootReducer = combineReducers({
    currentUserId, currentGradeLevel, currentSubject, classdata, studentdata, numberOfStudents
});

export default rootReducer;

