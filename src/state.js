const storeState =  {
    currentUserId: "",
    currentGradeLevel: "",
    currentSubject: "",
    numberOfStudents: 0,
    classdata: {
        loading: false,
        error: null,
        classes: []
    },
    studentdata: {
        loading: false, 
        error: null,
        students: []
    }
}

export default storeState

// export default {
//     currentUserId: "",
//     currentGradeLevel: "",
//     currentSubject: "",
//     numberOfStudents: 0,
//     classdata: [],
//     studentdata: [],
// }