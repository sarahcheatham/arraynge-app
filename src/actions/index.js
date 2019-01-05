
export function setCurrentGradeLevel(gradelevel){
    return {
        type: "SET_GRADE_LEVEL",
        value: gradelevel
    }
}

export function setCurrentSubject(subject){
    return {
        type: "SET_SUBJECT",
        value: subject
    }
}

export function loadUserId(){
    return function(dispatch){
        fetch("/api/hey")
        .then((res)=>{
            return res.text();
        }).then((userId)=>{
            dispatch(setCurrentUserId(userId));
        });
    };
}

export function setCurrentUserId(userId){
    return {
        type: "SET_USER_ID",
        value: userId
    }
}

export function loadClassData(){
    return function(dispatch){
        fetch("/api/classdata")
        .then((res)=>{
            return res.json();
        }).then((classdata)=>{
            dispatch(classDataLoaded(classdata));
        });
    };
}

export function classDataLoaded(classdata){
    return {
        type: "CLASS_DATA_LOADED",
        value: classdata
    }
}

export function createClassData(classdata){
    return function (dispatch){
        fetch("/api/classdata",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(classdata)
        }).then(()=> dispatch(loadClassData()));
    }
}

export function loadStudentData(){
    return function(dispatch){
        fetch("/api/studentdata")
        .then((res)=>{
            return res.json();
        }).then((students)=>{
            dispatch(studentDataLoaded(students))
        });
    };
}

export function studentDataLoaded(students){
    return {
        type: "STUDENT_DATA_LOADED",
        value: students
    }
}

export function createStudentData(students){
    return function (dispatch){
        fetch("/api/studentdata", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(students)
        }).then(()=> dispatch(loadStudentData()));
    }
}

export function setStudentName(studentName){
    return {
        type: "SET_SUBJECT",
        value: studentName
    }
}
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