import React, {Component} from "react";
import PropTypes from 'prop-types';

class TwoGroups extends Component{
    render(props){
        return(
            <div id="groupcontainer" className="droppable">
                <span
                id="grouponebox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group one</p>
                </span>
                <span
                id="grouptwobox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group two</p>
                </span>
            </div>
        );
    }
}

TwoGroups.propTypes ={
    onDrop: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired
};
export default TwoGroups;