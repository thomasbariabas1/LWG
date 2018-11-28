import React, {Component} from 'react'
import GameWrapperHoc from "../../lib/HoCs/GameWrapperHoc";


class FillTheSentence extends Component{



	render(){
		return(
			<div>
				FillTheSentence
			</div>
		)
	}
}

export default GameWrapperHoc()(FillTheSentence)
