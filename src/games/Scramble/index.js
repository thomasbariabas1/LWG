import './helpers/array_helpers';

import React, { Component }  from 'react';
import { times }                        from 'lodash';
import HTML5Backend                     from 'react-dnd-html5-backend';
import {
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
const gen4Numbers = (number) => {
	let numbers = [];
	while (numbers.length < number) {
		let newNr = (parseInt(Math.random() * number))+1;
		if (numbers.indexOf(newNr) === -1) {
			numbers.push(newNr);
		}
	}
	return numbers;
}
const arrayOfX = gen4Numbers(10)
const arrayOfY = gen4Numbers(3)


class Scrabble extends Component {
	constructor(props) {
		super(props);
		this.state = { tiles:tiles.map((tile,i)=>{
			tile.x = arrayOfX[i]
			tile.y = arrayOfY[Math.random()*2]
			return tile
		}),won:false, wonTiles:[] }

		this.updateDroppedTilePosition = this.updateDroppedTilePosition.bind(this);
		this.resetTiles = this.resetTiles.bind(this);
	}

	updateDroppedTilePosition = (props, tile) =>{
		// Normally, this would be done through a Redux action, but because this
		// is such a contrived example, I'm just passing the action down through
		// the child.
		const {x,y,winboard} = props
		const {xTile,yTile, onWinBoard} = tile
		// Create a copy of the state, find the newly-dropped tile.
		let stateTiles = this.state.tiles.slice();
		let stateWonTiles = this.state.wonTiles.slice();
		let index = stateTiles.findIndex( stateTile => stateTile.id === tile.id );
		let winBoardIndex = stateWonTiles.findIndex( stateTile => stateTile.id === tile.id );

		if(winboard){
			if(onWinBoard){
				stateWonTiles[winBoardIndex] = { ...tile, x, y}
			} else {
				stateWonTiles = [...stateWonTiles, {...tile, x, y,onWinBoard:true }]
				 stateTiles = stateTiles.filter((st, i)=>i!==index)
			}
		}else{
			if(onWinBoard){
				// Set it to a new copy of the tile, but with the new coords
				stateTiles = [...stateTiles,{ ...tile, x, y, onWinBoard:false }];
				stateWonTiles = stateWonTiles.filter((st, i)=>i!==winBoardIndex)
			}else{
				stateTiles[index] = { ...tile, x, y, onWinBoard:false }
			}

		}



		let wonTiles =  stateWonTiles
		let word = wonTiles.filter(tile=>tile.y===0).sort((a,b)=>a.x-b.x).map(tile=>tile.letter).join('')

		if(word === 'FLIPMOVE'){
			this.setState({ tiles: stateTiles,won:true,wonTiles });

		}else{
			this.setState({ tiles: stateTiles, won:false, wonTiles});

		}

	}

	resetTiles() {
		this.setState({ tiles, won:false, wonTiles:[]});
	}

	renderTiles = (wonBoard) => {

		if(wonBoard){
			return this.state.wonTiles.map( (tile, index) => {
				return (
					<Tile
						key={index}
						onDrop={this.updateDroppedTilePosition}
						{...tile}
					/>
				);
			});
		}

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

	renderBoardSquares(width,height,winboard) {
		// Create a 2D array to represent the board
		// Array#matrix is a monkeypatched, custom method >:)
		const matrix = Array.matrix(width,height);

		return matrix.map( (row, rowIndex) => (
			row.map( (index) => {

				return (
					<BoardSquare
						x={index}
						y={rowIndex}
						wordLength={this.state.wonTiles.length+this.state.tiles.length}
						winboard = {winboard}
						onDrop={this.updateDroppedTilePosition}
					/>
				);
			})
		));
	}

	render() {
		const {won} = this.state


		return (
			<div id="scrabble">
				<div style={{
					position:'relative',
					background:'green',
					margin:'2rem auto',
					height:'72px',
					width:`${(this.state.tiles.length+this.state.wonTiles.length)*58}px`,
					padding:'8px'
				}}>
				<div className="board">
					<FlipMove duration={200} staggerDelayBy={150} disableAllAnimations={true}>
						{ this.renderTiles(true) }
					</FlipMove>
					{ this.renderBoardSquares(8, 1,true) }
				</div>
				</div>
				<div className="board-border">
					<div className="board">
						<FlipMove duration={200} staggerDelayBy={150} disableAllAnimations={true}>
							{ this.renderTiles() }
						</FlipMove>
						{ this.renderBoardSquares(BOARD_WIDTH, 3) }
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
