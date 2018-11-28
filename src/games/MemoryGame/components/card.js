import React, {Component} from 'react'
import './card.css'
class Cards extends Component{

  render () {
    const className = this.props.revealed ? '' : 'rotate'

    return (
      <div className={`card ${className}`} onClick={this.clickHandler}>
        <a href='#'>
          <div className='card-icon'
            style={{backgroundColor: this.props.backgroundColor}}
            dangerouslySetInnerHTML={{__html: this.props.svg}}>
          </div>
          <h2>{this.props.label}</h2>
        </a>
      </div>
    )
  }

  clickHandler = (e)=> {
    e.preventDefault()
    this.props.onClick &&
      this.props.onClick({
        index: this.props.index,
        label: this.props.label,
        revealed: !this.props.revealed
      })
  }
}

Cards.defaultProps = {
	revealed: false
}

export default Cards
