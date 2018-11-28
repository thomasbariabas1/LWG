import React, {Component} from 'react'
import GameWrapperHoc from "../../lib/HoCs/GameWrapperHoc";


class Scramble extends Component{




	render(){
		return(
			<div>
				Scramble
			</div>
		)
	}


}

export default  GameWrapperHoc()(Scramble)
