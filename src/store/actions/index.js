export const setCurrentGradeLevel = gradelevel =>{
    return {
        type: "SET_GRADE_LEVEL",
        value: gradelevel
    }
}

export const setCurrentSubject = subject => {
    return {
        type: "SET_SUBJECT",
        value: subject
    }
}

export const setNumberOfStudents = numberOfStudents => {
    return {
        type: "SET_NUMBER_OF_STUDENTS",
        value: numberOfStudents
    }
}

export const handleErrors = response => {
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const loadUserId = () => {
    return dispatch => {
        fetch("/api/hey")
        .then((res)=>{
            return res.text();
        }).then((userId)=>{
            dispatch(setCurrentUserId(userId));
        });
    };
}

export const setCurrentUserId = userId => {
    return {
        type: "SET_USER_ID",
        value: userId
    }
}
//lastclass fetch
export const FETCH_LASTCLASS_BEGIN = "FETCH_LASTCLASS_BEGIN";
export const FETCH_LASTCLASS_SUCCESS = "FETCH_LASTCLASS_SUCCESS";
export const FETCH_LASTCLASS_FAILURE = "FETCH_LASTCLASS_FAILURE";

export const fetchLastClassBegin = () =>({
    type: FETCH_LASTCLASS_BEGIN
});

export const fetchLastClassSuccess = classes =>({
    type: FETCH_LASTCLASS_SUCCESS,
    payload: { classes }
});

export const fetchLastClassFailure = error =>({
    type: FETCH_LASTCLASS_FAILURE,
    payload: { error }
});


//classdata fetch
export const FETCH_CLASSDATA_BEGIN = "FETCH_CLASSDATA_BEGIN";
export const FETCH_CLASSDATA_SUCCESS = "FETCH_CLASSSDATA_SUCCESS";
export const FETCH_CLASSDATA_FAILURE = "FETCH_CLASSDATA_FAILURE";

export const fetchClassDataBegin = () =>({
    type: FETCH_CLASSDATA_BEGIN
});

export const fetchClassDataSuccess = classes =>({
    type: FETCH_CLASSDATA_SUCCESS,
    payload: { classes }
});

export const fetchClassDataFailure = error =>({
    type: FETCH_CLASSDATA_FAILURE,
    payload: { error }
});

export const loadClassData = () => {
    return dispatch => {
        dispatch(fetchClassDataBegin());
        return fetch('/api/classdata')
            .then(handleErrors)
            .then(res => res.json())
            .then(classes => {
                    dispatch(fetchClassDataSuccess(classes));
                    return classes;
            })
            .catch(error => dispatch(fetchClassDataFailure(error)))
    };
}

export const createClassData = classdata => {
    return dispatch => {
        fetch("/api/classdata",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(classdata)
        }).then(()=> dispatch(loadClassData()));
    }
}

//put in types.js
export const FETCH_STUDENTDATA_BEGIN = "FETCH_STUDENTDATA_BEGIN";
export const FETCH_STUDENTDATA_SUCCESS = "FETCH_STUDENTDATA_SUCCESS";
export const FETCH_STUDENTDATA_FAILURE = "FETCH_STUDENTDATA_FAILURE";

export const fetchStudentDataBegin = () =>({
    type: FETCH_STUDENTDATA_BEGIN
});

export const fetchStudentDataSuccess = students =>({
    type: FETCH_STUDENTDATA_SUCCESS,
    payload: { students }
});

export const fetchStudentDataFailure = error =>({
    type: FETCH_STUDENTDATA_FAILURE,
    payload: { error }
});

export const loadStudentData = () => {
    return dispatch => {
        dispatch(fetchStudentDataBegin());
        return fetch('/api/studentdata')
            .then(handleErrors)
            .then(res => res.json())
            .then(students => {
                    dispatch(fetchStudentDataSuccess(students));
                    return students;
            })
            .catch(error => dispatch(fetchStudentDataFailure(error)))
    };
}

export const createStudentData = studentdata => {
    return dispatch => {
        fetch("/api/studentdata",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(studentdata)
        }).then(()=> dispatch(loadStudentData()));
    }
}










//put in types.js
// export const FETCH_STUDENTDATA_BEGIN = "FETCH_STUDENTDATA_BEGIN";
// export const FETCH_STUDENTDATA_SUCCESS = "FETCH_STUDENTDATA_SUCCESS";
// export const FETCH_STUDENTDATA_FAILURE = "FETCH_STUDENTDATA_FAILURE";

// export const fetchStudentDataBegin = () =>({
//     type: FETCH_STUDENTDATA_BEGIN
// });

// export const fetchStudentDataSuccess = students =>({
//     type: FETCH_STUDENTDATA_SUCCESS,
//     payload: { students }
// });

// export const fetchStudentDataFailure = error =>({
//     type: FETCH_STUDENTDATA_FAILURE,
//     payload: { error }
// });

// export function loadStudentData(){
//     return function(dispatch){
//         fetch("/api/studentdata")
//         .then((res)=>{
//             return res.json();
//         }).then((studentdata)=>{
//             console.log('actions studentdata:', studentdata)
//             dispatch(studentDataLoaded(studentdata));
//         });
//     };
// }

// export function studentDataLoaded(studentdata){
//     return {
//         type: "STUDENT_DATA_LOADED",
//         value: studentdata
//     }
// }

// export function createStudentData(studentdata){
//     return function (dispatch){
//         fetch("/api/studentdata",{
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(studentdata)
//         }).then(()=> dispatch(loadStudentData()));
//     }
// }


// export function createClassData(classdata){
//     console.log("ACTION",classdata)
//     return function (dispatch){
//         fetch("/api/classdata",{
//             method: "POST",
//             headers: {"Content-Type" : "application/json"},
//             body: JSON.stringify({
//                 gradelevel: classdata.gradelevel,
//                 subject: classdata.subject,
//                 userId: classdata.userId
//             })
//         }).then(()=> dispatch(loadClassData()));
//     };
// }

// export function loadClassData(){
//     return function (dispatch){
//         fetch("/api/classdata")
//         .then((res)=>{
//             return res.json()
//         }).then((classdata)=>{
//             dispatch(classDataLoaded(classdata));
//         });
//     };
// }

// export function classDataLoaded(classdata){
//     return {
//         type: "CLASS_DATA_LOADED",
//         value: classdata
//     };
// }



// export const postClassaDataRequest = () => {
//     console.log('REQUEST')
//     return {
//         type: 'POST_CLASS_DATA_LOADING'
//     }
// }

// export const submitClassDataSuccess = (data) => {
//     console.log('SUCCESS')
//     return {
//         type: 'POST_CLASS_DATA_SUCCESS',
//         data
//     }
// }

// export const postClassDataFail = (error) => {
//     console.log('FAIL')
//     return {
//         type: 'POST_CLASS_DATA_FAIL',
//         error
//     }
// }
// export function createContact(contact){
//     return function (dispatch){
//       fetch("/contacts", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(contact)
//       }).then(()=> dispatch(loadContacts()));
//     };
//   }
   
// export const postClassData = (data) => {
//     console.log("POSTING_DATA_ACTION", data)
//     let config = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             gradelevel: data.gradelevel,
//             subject: data.subject
//         }),
//     }
//     return dispatch => {
//         dispatch(postClassaDataRequest())
//         return fetch('/api/classdata', config)
//         .then(res => res.json())
//         .then(data => {
//             dispatch(submitClassDataSuccess(data))
//         }).catch(err => {
//             dispatch(postClassDataFail(err))
//             throw err
//         })
//     }
// }