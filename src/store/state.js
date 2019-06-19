const storeState =  {
    currentUserId: "",
    currentClass: {},
    // currentClass: {
    //     loading: false,
    //     error: null,
    //     curr: []
    // },
    welcomeMessage: "",
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

