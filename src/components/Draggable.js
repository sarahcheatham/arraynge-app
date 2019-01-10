import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ArrayngementPage from './ArrayngementPage';
import PropTypes from 'prop-types';

class Draggable extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            pos: this.props.initialPos,
            dragging: false,
            rel: null
        };
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }
    static propTypes = {
        initialPos: PropTypes.object.isRequired,
    }

    static defaultProps = {
        initialPos: {x:0, y:0}
    }
    // getDefaultProps(){
    //     return {
    //         initialPos: {x:0, y:0}
    //     }
    // }

    // getInitialState(){
    //     return {
    //         pos: this.props.initialPos,
    //         dragging: false,
    //         rel: null
    //     }
    // }
    componentDidMount(){
        const { pos, dragging, rel} = this.props;
    }

    componentDidUpdate(props, state){
        if(this.state.dragging && !state.dragging){
            document.addEventListener('mousemove', this.onMouseMove)
            document.addEventListener('mouseup', this.onMouseUp)
        } else if(!this.state.dragging && state.dragging){
            document.removeEventListener('mousemove', this.onMouseMove)
            document.removeEventListener('mouseup', this.onMouseUp)
        }

    }

    onMouseDown(e){
        if(e.button !== 0) return 
        var pos = ReactDOM.findDOMNode(ArrayngementPage).offset()
        this.setState({
            dragging: true,
            rel: {
                x: e.pageX - pos.left,
                y: e.pageY - pos.top
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    onMouseUp(e){
        this.setState({dragging: false})
        e.stopPropagation()
        e.preventDefault()
    }

    onMouseMove(e){
        if(!this.state.dragging) return
        this.setState({
            pos: {
                x: e.pageX - this.state.rel.x,
                y: e.pageY - this.state.rel.y
            }
        })
        e.stopPropagation()
        e.preventDefault()
    }

    render(){
        return this.transferPropsTo(ReactDOM.div({
            onMouseDown: this.onMouseDown,
            style: {
                left: this.state.pos.X + 'px',
                top: this.state.pos.y + 'px'
            }
        }, this.props.children))
    }
}
// Draggable.propTypes ={
//     initialPos: PropTypes.object.isRequired
// };
 export default Draggable;