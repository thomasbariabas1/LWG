import React from 'react';
import winImage from '../img/win.gif';
import loseImage from '../img/7.png';
import styled from 'styled-components';

const Text = styled.p`
  display: ${props => (props.newGame ? 'none' : 'block')};
  font-size: 26px;
  max-width: 200px;
  margin: 0;
  padding-right: 40px;
 
`;


const GameOver = props =>(
	<div style={{display:'flex',flexDirection:'column'}}>
		<Text {...props}>{props.text}</Text>
		{!props.newGame&&<div style={{
			content: '',
			width:`${props.isLose ? '220px' : '300px'}`,
			height: `${props.isLose ? '220px' : '300px'}`,
			backgroundRepeat: 'no-repeat',
			display: 'inline-block',
			backgroundSize: '100%',
			margin: '10px',
			position: 'relative',
			left: '60px',
			backgroundImage:props.isLose ? `url(${loseImage})` : `url(${winImage})`,
		}}/>}
	</div>
);

export default GameOver;
