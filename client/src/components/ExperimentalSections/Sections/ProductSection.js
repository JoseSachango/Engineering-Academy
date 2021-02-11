import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import List from "@material-ui/icons/List";
import Dashboard from "@material-ui/icons/Dashboard";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Project from "@material-ui/icons/AccountTree"
// core components
import GridContainer from "../../DocumentationExperiment/components/Grid/GridContainer"
//"components/Grid/GridContainer.js";
import GridItem from "../../DocumentationExperiment/components/Grid/GridItem"
//"components/Grid/GridItem.js";
import InfoArea from "../../DocumentationExperiment/components/InfoArea/InfoArea"
//"components/InfoArea/InfoArea.js";

import styles from "../../DocumentationExperiment/assets/jss/material-kit-react/views/landingPageSections/productStyle"
//"assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Welcome!</h2>
          <h5 className={classes.description}>
            I've made this site to provide a free and flexible way for those interested 
            in chemical engineering to learn more about the subject, or hone their skills. 
            This app offers interative lessons, quizzes and projects that are meant to help students learn as 
            effectively as possible. I hope you have as much fun using this resource as I had making it. Enjoy! 
          </h5>
         

        </GridItem>
      </GridContainer>
      <br/>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Features</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Organized Courses"
              description="Courses are organized based on a typical university chemical engineering curriculum, but feel free to try any course you'd like in whatever order you'd like."
              icon={List}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Dashboards"
              description="Dashboards give you up to date metrics on overall progression. Allowing you to pinpoint areas that need improvment"
              icon={Dashboard}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Projects"
              description="Fullscale projects help reinforce your understanding of the material."
              icon={Project}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
