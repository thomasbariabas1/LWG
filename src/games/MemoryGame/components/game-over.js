import React,{Component}from 'react'
import GameOverSVG from './game-over-svg'
import './game-over.css'

class GameOver extends Component{
  render () {
    return (
      <div className='game-over'>
        <div className='message'>
          <GameOverSVG />
          <span>Game Over</span>

        </div>
        <p>
        </p>
      </div>
    )
  }
}

export default GameOver
