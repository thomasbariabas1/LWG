import React, {Component} from 'react'

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";


let dashboardRoutes =[]

const GameWrapperHoc = () => {
		return (Child)=> {
		class GameWrapper extends Component {

			constructor(props) {
				super(props)
				this.myRef = React.createRef();
			}

			scrollToMyRef = () => {
				window.scrollTo({
					top: this.myRef.current.offsetTop,
					behavior: "smooth"
				})
			}

			render() {
				const {classes, ...rest} = this.props;
				console.log(Child)
				return (
					<div>
						<Header
							color="transparent"
							routes={dashboardRoutes}
							brand="Learn With Games"
							rightLinks={<HeaderLinks/>}
							fixed
							changeColorOnScroll={{
								height: 400,
								color: "white"
							}}
							{...rest}
						/>
						<Parallax filter image={require("assets/img/landing-bg.jpg")}>
							<div className={classes.container}>
								<GridContainer>
									<GridItem xs={12} sm={12} md={6}>
										<h1 className={classes.title}>Hangman</h1>
										<h4>
											You must find the word to make the man happy.
											Can you handle the thrill?
										</h4>
										<br/>
										<Button
											color="danger"
											size="lg"
											target="_blank"
											onClick={this.scrollToMyRef}
										>
											<i className="fas fa-play"/>Start
										</Button>
									</GridItem>
								</GridContainer>
							</div>
						</Parallax>
						<div ref={this.myRef} className={classNames(classes.main, classes.mainRaised)}>
							<div className={classes.container}>
								{<Child {...this.props}/>}
							</div>
						</div>
						<Footer/>
					</div>
				);
			}


		}

		return withStyles(landingPageStyle)(GameWrapper)
	}
}

export default GameWrapperHoc
