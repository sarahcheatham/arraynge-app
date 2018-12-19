import React from "react";
import { Link } from 'react-router-dom';

export default function SignUpButton(props){
    const styles = {
        color: 'white',
        textDecoration: 'none'
    }
    return(
        <button className={props.className} onClick={props.onClick}>
            <Link to={'/signup'} style={styles}>
                CREATE ACCOUNT NOW
            </Link>
        </button> 
       
    )
}