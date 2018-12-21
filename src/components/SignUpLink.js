import React from "react";
import { Link } from 'react-router-dom';

export default function SignUpLink(props){
    const styles = {
        color: 'white',
        textDecoration: 'none'
    }
    return(
        <div className="signup">
            <h2 className="signupHeader">CREATE AN ACCOUNT</h2>
            <p className="signupText">Creating an account is super easy. <br/>Just click below to get started.</p>
            <button className={props.className} onClick={props.onClick}>
                <Link to={'/signup'} style={styles}>
                    CREATE ACCOUNT NOW
                </Link>
            </button> 
        </div>
    )
}