import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../DocumentationExperiment/components/Grid/GridContainer"
//"components/Grid/GridContainer.js";
import GridItem from "../../DocumentationExperiment/components/Grid/GridItem"
//"components/Grid/GridItem.js";
import Button from "../../DocumentationExperiment/components/CustomButtons/Button"
//"components/CustomButtons/Button.js";
import Card from "../../DocumentationExperiment/components/Card/Card"
//"components/Card/Card.js";
import CardBody from "../../DocumentationExperiment/components/Card/CardBody"
//"components/Card/CardBody.js";
import CardFooter from "../../DocumentationExperiment/components/Card/CardFooter"
//"components/Card/CardFooter.js";

import styles from "../../DocumentationExperiment/assets/jss/material-kit-react/views/landingPageSections/teamStyle"
//"assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../DocumentationExperiment/assets/img/faces/avatar.jpg"
//"assets/img/faces/avatar.jpg";
import team2 from "../../DocumentationExperiment/assets/img/faces/Jose.jpg"
//"assets/img/faces/christian.jpg";
import team3 from "../../DocumentationExperiment/assets/img/faces/kendall.jpg"
//"assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
         
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jose Sachango
                <br />
                <small className={classes.smallTitle}>Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  As the projects engineer, Jose's responsible for developing the front and backend of this application.
                  His background as a chemical engineer and his experience in the upstream oil and gas has also allowed him to be the chief content creator for each course.
                  If you have any questions feel free to connect with him on linkedIn using the following link: <a href="https://www.linkedin.com/in/jose-sachango">Contact</a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Valerie Ayala
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
