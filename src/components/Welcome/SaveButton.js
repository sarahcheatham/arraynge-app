import React from 'react';
import PropTypes from 'prop-types';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const SaveButton = (props) => {
    return (
        <button variant="outlined" color="primary" size="small" style={props.style} onClick={props.show}>
            <SaveIcon style={props.iconStyle} fontSize="small"/>
            <span style={props.styleText}>Save</span>
        </button>
    )
}

SaveButton.propTypes ={
    show: PropTypes.func.isRequired
};

export default SaveButton;