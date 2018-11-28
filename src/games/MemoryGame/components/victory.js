import React from 'react'
import VictorySVG from './victory-svg'
import './victory.css'

const Victory = (props)=> <div className='victory'>
        <div className='message'>
          <VictorySVG />
          <span>Congrats!</span>
        </div>
        <p>
			<a style = {{cursor:'pointer'}} onClick={props.resetGame}>Try Again</a>

		</p>
      </div>


export default Victory
