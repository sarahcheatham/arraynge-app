import React from 'react';
import PropTypes from 'prop-types';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const SaveButton = (props) => {
    return (
        <Button variant="contained" color="primary" size="small" style={props.style} onClick={props.show}>
            <SaveIcon fontSize="small"/>
            <span>Save</span>
        </Button>
    )
}

SaveButton.propTypes ={
    show: PropTypes.func.isRequired
};

export default SaveButton;