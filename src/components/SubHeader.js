import React from "react";

export default function SubHeader(props){
    return(
        <div className={props.className}>
           {props.text}
        </div>
    )
}