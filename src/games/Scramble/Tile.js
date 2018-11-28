import {DragSource, DropTarget} from "react-dnd";
import {Component} from "react";
import React from "react";
import './scramble.css'
const SQUARE_SIZE   = 56;
const TILE_OFFSET   = 3;

const tileSource = {
	beginDrag(props) { return props; }
};

const tileTarget = {
	drop(props, monitor) {
		const tile1 = props;
		const tile2 = monitor.getItem();

		props.onDrop(tile1, tile2);
		props.onDrop(tile2, tile1);
	}
}

class Tile extends Component {


	render() {
		const {
			connectDropTarget, connectDragSource, isDragging, letter, points, x, y
		} = this.props;

		const styles = {
			left:     x * SQUARE_SIZE - TILE_OFFSET,
			top:      y * SQUARE_SIZE - TILE_OFFSET,
			zIndex:   `${x+1}${y+1}`,
			opacity:  isDragging ? 0.5 : 1
		};

		return connectDropTarget(connectDragSource(
			<div className="tile" style={styles}>
				<span className="tile-letter">{letter}</span>
			</div>
		));
	}
}

export default DragSource('tile', tileSource, (connect, monitor) => ({
	connectDragSource:  connect.dragSource(),
	isDragging:         monitor.isDragging()
}))(DropTarget('tile', tileTarget, (connect, monitor) => ({
	connectDropTarget:  connect.dropTarget(),
	isOver:             monitor.isOver()
}))(Tile))
