import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Header from "./DocumentationExperiment/components/Header/Header";
import HeaderLinks from "./DocumentationExperiment/components/Header/HeaderLinks"
import styles from "./DocumentationExperiment/assets/jss/material-kit-react/views/landingPage"
//import Footer from "components/Footer/Footer.js";
import GridContainer from "../components/DocumentationExperiment/components/Grid/GridContainer"
//"components/Grid/GridContainer.js";
import GridItem from "./DocumentationExperiment/components/Grid/GridItem"
//"components/Grid/GridItem.js";
import Button from "./DocumentationExperiment/components/CustomButtons/Button"
//"components/CustomButtons/Button.js";
//import HeaderLinks from "./DocumentationExperiment/components/Header/HeaderLinks"
//"components/Header/HeaderLinks.js";
import Parallax from "./DocumentationExperiment/components/Parallax/Parallax"
//"components/Parallax/Parallax.js";

// Sections for this page
import ProductSection from "./ExperimentalSections/Sections/ProductSection"
//"./Sections/ProductSection.js";
import TeamSection from "./ExperimentalSections/Sections/TeamSection"
//"./Sections/TeamSection.js";
import WorkSection from "./ExperimentalSections/Sections/WorkSection"
//"./Sections/WorkSection.js";

import classNames from "classnames";

const useStyles = makeStyles(styles)


const DocumentationExperiment = ()=>{
    const {loginWithRedirect,logout,isAuthenticated} = useAuth0();
    const classes = useStyles()
    const dashboardRoutes = []

    return (

        !isAuthenticated && (
                <>
                    <Header
                            color="transparent"
                            routes={dashboardRoutes}
                            brand="Engineering Academy"
                            rightLinks={<HeaderLinks />}
                            fixed
                            changeColorOnScroll={{
                            height: 400,
                            color: "white"
                            }}
                            
                    />
                    <Parallax filter image={require("./DocumentationExperiment/assets/img/AmineTreatingPFD.png")}>
                        <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>A New Way to Learn Engineering.</h1>
                            <h4>
                                Every landing page needs a small description after the big bold
                                title, that{"'"}s why we added this text here. Add here all the
                                information that can make you or your product create the first
                                impression.
                            </h4>
                            <br />
                            <Button
                                color="danger"
                                size="lg"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-play" />
                                Watch video
                            </Button>
                            </GridItem>
                        </GridContainer>
                        </div>
                    </Parallax>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <div className={classes.container}>
                        <ProductSection />
                        <TeamSection />
                        <WorkSection />
                        </div>
                    </div>
                </>

        )
    )

}



export default DocumentationExperiment

