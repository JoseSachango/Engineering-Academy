import React, { useState, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton"
import { Apps, CloudDownload } from "@material-ui/icons";
import headerStyle from "./material-kit-react/headerStyle"
import headerLinksStyle from "./material-kit-react/headerLinksStyle"
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";//Navigation drawers provide access to destinations in your app. Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
      },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    appbar: headerStyle.appBar,
    title: headerStyle.title,
    list: headerLinksStyle.list,
    navLink: headerLinksStyle.navLink,
    icons: headerLinksStyle.icons,
    listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          "&:after": {
            width: "calc(100% - 30px)",
            content: '""',
            display: "block",
            height: "1px",
            marginLeft: "15px",
            backgroundColor: "#e5e5e5"
          }
        }
      },
      navLink: {
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus": {
          color: "inherit",
          background: "rgba(200, 200, 200, 0.2)"
        },
        [theme.breakpoints.down("sm")]: {
          width: "calc(100% - 30px)",
          marginLeft: "15px",
          marginBottom: "8px",
          marginTop: "8px",
          textAlign: "left",
          "& > span:first-child": {
            justifyContent: "flex-start"
          }
        }
      },

}))


const LandingPage = () =>{

    //Variables to check if the user is authenticated and collect user infromation. If the user is authenticated then we display a different page
    const { user, isAuthenticated} = useAuth0();

    const classes = useStyles()


    return (

        isAuthenticated && (
            <>
                <AppBar position="static">
                            <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                            </Toolbar>
                </AppBar>    
                <AppBar className={classes.appbar}>
                    <Toolbar >
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography  className={classes.title}>
                               Engineering Academy
                            </Typography>
                            <List className={classes.list}>
                                <ListItem className={classes.ListItem}>

                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <Button
                                    href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
                                    color="transparent"
                                    target="_blank"
                                    className={classes.navLink}
                                    >
                                    <CloudDownload className={classes.icons} /> Download
                                    </Button>
                                </ListItem>
                            </List>
                            
                            <LoginButton/>
                            <LogoutButton />
                    </Toolbar>

                </AppBar>
                <h1>{JSON.stringify(headerStyle.appBar) }headerStyle.appBar</h1>
                <br />
                <h1>{JSON.stringify(headerStyle.title) }headerStyle.title</h1>
                
            </>
        )

    )
}



export default LandingPage