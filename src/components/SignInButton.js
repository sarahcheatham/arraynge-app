import React from "react";

export default function SignInButton(props){
    return(
        <button className={props.className} onClick={props.onClick} onSubmit={props.onSubmit}>
            LOGIN
        </button> 
    )
}