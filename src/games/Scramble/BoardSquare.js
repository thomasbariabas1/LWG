import React, {Component} from 'react'
import {DropTarget} from "react-dnd";
import classNames                       from 'classnames';
import './scramble.css'



class BoardSquare extends Component {
	renderSquare() {
		let classes = classNames({
			'board-square': true,
			'dragged-over': this.props.isOver
		});
		if(this.props.y===0&&this.props.x<this.props.wordLength){
			classes = classNames({
				'board-square': true,
				'dragged-over': this.props.isOver,
				'solution':true
			});
		}
		return <div className={classes}></div>
	}
	render() {
		if ( this.props.tile ) {
			// If this square already has a tile in it, we don't want to allow drops.
			return this.renderSquare();
		} else {
			return this.props.connectDropTarget( this.renderSquare() );
		}
	}
}

const squareTarget = {
	drop(props, monitor) {
		props.onDrop(props, monitor.getItem());
	}
}

export default DropTarget('tile', squareTarget, (connect, monitor) => ({
	connectDropTarget:  connect.dropTarget(),
	isOver:             monitor.isOver()
}))(BoardSquare)
