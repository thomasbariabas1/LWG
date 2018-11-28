import './helpers/array_helpers';

import React, { Component }  from 'react';
import moment                           from 'moment';
import { times }                        from 'lodash';
import HTML5Backend                     from 'react-dnd-html5-backend';
import {
	DragSource,
	DropTarget,
	DragDropContext
} from 'react-dnd';

import FlipMove from 'react-flip-move';
import Toggle from './Toggle.jsx';
import tiles from './data/tiles.js';
import GameWrapperHoc from "../../lib/HoCs/GameWrapperHoc";
import BoardSquare from "./BoardSquare";
import Tile from './Tile'
import './scramble.css';

const BOARD_WIDTH   = 11;
const BOARD_HEIGHT  = 7;
const NUM_SQUARES   = BOARD_WIDTH * BOARD_HEIGHT;



class Scrabble extends Component {
	constructor(props) {
		super(props);
		this.state = { tiles,won:false }

		this.updateDroppedTilePosition = this.updateDroppedTilePosition.bind(this);
		this.resetTiles = this.resetTiles.bind(this);
	}

	updateDroppedTilePosition({x, y}, tile) {
		// Normally, this would be done through a Redux action, but because this
		// is such a contrived example, I'm just passing the action down through
		// the child.

		// Create a copy of the state, find the newly-dropped tile.
		let stateTiles = this.state.tiles.slice();
		const index = stateTiles.findIndex( stateTile => stateTile.id === tile.id );

		// Set it to a new copy of the tile, but with the new coords
		stateTiles[index] = { ...tile, x, y };
		let word = stateTiles.filter(tile=>tile.y===0).sort((a,b)=>a.x-b.x).map(tile=>tile.letter).join('')
		console.log(word)
		console.log(stateTiles)
		console.log(stateTiles.filter(tile=>tile.y===0).sort((a,b)=>a.x-b.x).map(tile=>tile.letter))
		if(word === 'FLIPMOVE'){
			this.setState({ tiles: stateTiles,won:true });

		}else{
			this.setState({ tiles: stateTiles, won:false});

		}

	}

	resetTiles() {
		this.setState({ tiles, won:false});
	}

	renderTiles() {
		return this.state.tiles.map( (tile, index) => {
			return (
				<Tile
					key={index}
					onDrop={this.updateDroppedTilePosition}
					{...tile}
				/>
			);
		});
	}

	renderBoardSquares() {
		// Create a 2D array to represent the board
		// Array#matrix is a monkeypatched, custom method >:)
		const matrix = Array.matrix(BOARD_WIDTH, BOARD_HEIGHT);

		return matrix.map( (row, rowIndex) => (
			row.map( (index) => {
				return (
					<BoardSquare
						x={index}
						y={rowIndex}
						wordLength={this.state.tiles.length}
						onDrop={this.updateDroppedTilePosition}
					/>
				);
			})
		));
	}

	render() {
		const {won} = this.state
		console.log('won',won)
		return (
			<div id="scrabble">
				<div className="board-border">
					<div className="board">
						<FlipMove duration={200} staggerDelayBy={150}>
							{ this.renderTiles() }
						</FlipMove>
						{ this.renderBoardSquares() }
					</div>

				</div>

				<div className="controls">
					{won&&<span style={{color:'black'}}>Won! you madafaka</span>}
					<Toggle
						clickHandler={this.resetTiles}
						text="Reset" icon="refresh"
						active={true}
						large={true}
					/>
				</div>
			</div>
		);
	}
};







export default GameWrapperHoc()(DragDropContext(HTML5Backend)(Scrabble));
