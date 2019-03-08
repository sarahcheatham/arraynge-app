import React, {Component} from "react";
import PropTypes from 'prop-types';

class FiveGroups extends Component{
    render(props){
        return(
            <div id="fiveGroupContainer" className="droppable">
                <span
                id="fiveGroupOneBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contentEditable>group one</p>
                </span>
                <span
                id="fiveGroupTwoBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contentEditable>group two</p>
                </span>
                <span
                id="fiveGroupThreeBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contentEditable>group three</p>
                </span>
                <span
                id="fiveGroupFourBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contentEditable>group four</p>
                </span>
                <span
                id="fiveGroupFiveBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contentEditable>group five</p>
                </span>
            </div>
        );
    }
}

FiveGroups.propTypes ={
    onDrop: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired
};
export default FiveGroups;