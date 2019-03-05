import React, {Component} from "react";
import PropTypes from 'prop-types';

class ThreeGroups extends Component{
    render(props){
        return(
            <div id="groupcontainer" className="droppable">
                <span
                id="grouponebox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader">group one</p>
                </span>
                <span
                id="grouptwobox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader">group two</p>
                </span>
                <span
                id="groupthreebox"
                className="droppable"
                onDrop={this.props.onDrop}
                onDragOver={this.props.onDragOver}
                >
                    <p className="groupheader">group three</p>
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