import React from 'react';
import './Checkbox.css';


const Checkbox = (props) => {
    const styles = {stroke: 'white', fill: 'white'}
    return (
        <input type="checkbox" id="checkbox-2-1" className="regular-checkbox big-checkbox" style={props.style} onClick={props.onCheck} checked={props.checked}/>  
    )
}

export default Checkbox;