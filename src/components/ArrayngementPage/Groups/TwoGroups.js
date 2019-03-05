import React, {Component} from "react";
import PropTypes from 'prop-types';

class TwoGroups extends Component{
    render(props){
        return(
            <div id="twoGroupContainer" className="droppable">
                <span
                id="twoGroupOneBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader">group one</p>
                </span>
                <span
                id="twoGroupTwoBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader">group two</p>
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