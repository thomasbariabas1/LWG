import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components

// Sections for this page
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import {push} from "../../lib/history";


class LandingPage extends React.Component {
	constructor(props) {
		super(props)
	}

	Redirect = () =>{
		push(this.props.path)
	}
	render() {
		const {classes, title, description, path, image} = this.props
		return (
						<GridItem xs={3} sm={3}  lg={3} className={classes.marginAuto}>
							<Card>
								<CardActionArea
									onClick={this.Redirect}
								>
									<CardMedia
										className={classes.media}
										image={image}
										title={title}
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											{title}
										</Typography>
										<Typography component="p">
											{description}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</GridItem>
					 );
	}
}

LandingPage.defaultProps = {
	title:'Hangman',
	description:'Hang or be Hanged!',
}

export default withStyles(carouselStyle)(LandingPage);
