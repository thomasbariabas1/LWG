import React from "react";

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

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";
import Games from '../../games'
import GameCard from 'components/GameCards'

let dashboardRoutes =[]

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

  render() {
	  const {classes, ...rest} = this.props;
	  return (
		  <div>
			  <Header
				  color="transparent"
				  routes={dashboardRoutes}
				  brand="Learn With Games"
				  rightLinks={<HeaderLinks/>}
				  fixed
				  changeColorOnScroll={{
					  height: 100,
					  color: "white"
				  }}
				  {...rest}
			  />
			  <Parallax filter image={require("assets/img/background.png")}>
				  <div className={classes.container} style={{paddingTop:'170px'}}>
					  <GridContainer>
						  <GridItem xs={6} sm={6} md={6}>
							  <h1 className={classes.title}>Select Game To Start Learning</h1>
							  <br/>
						  </GridItem>
					  </GridContainer>
				  </div>
			  </Parallax>
			  <div ref={this.myRef} className={classNames(classes.main, classes.mainRaised)}>
					  <GridContainer>

					  {
						  Games.map((game)=><GameCard path={game.path} title={game.name} image={game.image} description={game.description}/>)
					  }
					  </GridContainer>
			  </div>
			  <Footer/>
		  </div>
	  );
  }

}

export default withStyles(landingPageStyle)(LandingPage);
