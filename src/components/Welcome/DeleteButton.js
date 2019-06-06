import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


const DeleteButton = (props) => {
    return (
        <Fab size="small" aria-label="Delete" style={props.style}>
            <DeleteIcon fontSize="small" style={props.style}/>
        </Fab>
    )
}

export default DeleteButton;