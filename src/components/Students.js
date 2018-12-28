import React from "react";

export default function NewUserButton(props){
    let date =  new Date();
    let { students} = props;
    let studentComponents = [];

    for(let i = 0; i < students.length; i++){
        let sc = <Student student={ students[i] } date={ date }/>;
        studentComponents.push(sc);
    }
    return (
        <div>
            {studentComponents}
        </div>
    )
}