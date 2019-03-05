import React, {Component} from "react";
import PropTypes from 'prop-types';

class FourGroups extends Component{
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
                <span
                id="groupthreebox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group three</p>
                </span>
                <span
                id="groupfourbox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group four</p>
                </span>
            </div>
        );
    }
}

FourGroups.propTypes ={
    onDrop: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired
};
export default FourGroups;