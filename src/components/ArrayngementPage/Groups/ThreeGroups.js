import React, {Component} from "react";
import PropTypes from 'prop-types';

class ThreeGroups extends Component{
    render(props){
        return(
            <div id="threeGroupContainer" className="droppable">
                <span
                id="threeGroupOneBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contentEditable>group one</p>
                </span>
                <span
                id="threeGroupTwoBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contentEditable>group two</p>
                </span>
                <span
                id="threeGroupThreeBox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader" contentEditable>group three</p>
                </span>
            </div>
        );
    }
}

ThreeGroups.propTypes ={
    onDrop: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired
};
export default ThreeGroups;