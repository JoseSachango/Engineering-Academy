import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import LogoutButton from "../../LogoutButton"

// @material-ui/icons

// core components
import GridContainer from "../../DocumentationExperiment/components/Grid/GridContainer"
//"components/Grid/GridContainer.js";
import GridItem from "../../DocumentationExperiment/components/Grid/GridItem"
//"components/Grid/GridItem.js";
import CustomInput from "../../DocumentationExperiment/components/CustomInput/CustomInput"
//"components/CustomInput/CustomInput.js";
import Button from "../../DocumentationExperiment/components/CustomButtons/Button"
//"components/CustomButtons/Button.js";

import styles from "../../DocumentationExperiment/assets/jss/material-kit-react/views/landingPageSections/workStyle"
//"assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridContainer justify="center" >
            <GridItem cs={12} sm={12} md={8}>
              <h2 className={classes.title}>Try it out</h2>
              <h4 className={classes.description}>
                Click on the button bellow to register as a new user 
              </h4>

            </GridItem>
        </GridContainer>
      
      </GridContainer>
      <GridContainer justify="center">
          <LogoutButton color="danger"/>
      </GridContainer>
    </div>
  );
}
