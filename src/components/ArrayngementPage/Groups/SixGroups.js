import React, {Component} from "react";
import PropTypes from 'prop-types';

class SixGroups extends Component{
    render(props){
        return(
            <div id="sixGroupContainer" className="droppable">
                <span
                id="sixGroupOneBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group one</p>
                </span>
                <span
                id="sixGroupTwoBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group two</p>
                </span>
                <span
                id="sixGroupThreeBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group three</p>
                </span>
                <span
                id="sixGroupFourBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group four</p>
                </span>
                <span
                id="sixGroupFiveBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group five</p>
                </span>
                <span
                id="sixGroupSixBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contenteditable="true">group six</p>
                </span>
            </div>
        );
    }
}

SixGroups.propTypes ={
    onDrop: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired
};
export default SixGroups;