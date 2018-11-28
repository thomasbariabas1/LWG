import React, {Component} from 'react'
import './double-bounce-spinner.css'

class DoubleBounceSpinner extends Component{
  render () {
    return (
      <div className='double-bounce-spinner'>
        <div className='bounce1' />
        <div className='bounce2' />
      </div>
    )
  }
}


export default DoubleBounceSpinner
