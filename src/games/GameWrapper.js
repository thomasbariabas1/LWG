import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import gameRoutes from "./index";



class GameWrapper extends Component {

	constructor(props) {
		super(props)
		this.myRef = React.createRef();
	}

	render() {
		return (
			<Switch>
				{gameRoutes.map((prop, key) => {
					return <Route path={prop.path} key={key} component={prop.component}/>;
				})}
			</Switch>
		);
	}
}

export default GameWrapper

