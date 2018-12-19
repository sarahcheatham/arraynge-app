import React from "react";
import { Link } from 'react-router-dom';

export default function ClassDataButton(props){
    const styles = {
        color: 'black',
        textDecoration: 'none'
    }
    return(
        <button className={props.className} text={props.text} onClick={props.onClick}>
            <Link to={'/studentdata'} style={styles}>
                {props.text}
            </Link>
        </button>   
    )
}