/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown"
//"components/CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button"
//"components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle"
import LoginButton from "../../../LoginButton";
import LogoutButton from "../../../LogoutButton"
//"assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Navigation"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Main page
            </Link>,
            <a
              href="https://github.com/JoseSachango/Engineering-Academy"
              target="_blank"
              className={classes.dropdownLink}
            >
              Project Repo
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <LoginButton 
          color="transparent"
          target="_blank"
          className={classes.navLink}
        />
        <LogoutButton 
          color="transparent"
          target="_blank"
          className={classes.navLink}
        />
      </ListItem>
     
     
     
    </List>
  );
}
