import React, {Component} from "react";
import StudentForm from './StudentForm';


class StudentDataPage extends Component{

    render(){
        let studentComponents = [];

        for(let i = 0; i < 30; i++){
            let sc = <StudentForm/>
            studentComponents.push(sc)
        }
        return(
            <div>
                {studentComponents}
            </div>
        )
    }
}
export default StudentDataPage;