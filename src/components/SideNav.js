import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { RiDashboard2Line, RiUserLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Logo from "../logo.png";

const useStyles = makeStyles(() => ({
  center: {
    textAlign: "center",
  },
  whiteText: {
    color: "#fff",
  },
  sentenceCase: {
    textTransform: "capitalize",
  },
}));

const SideNav = () => {
  const classes = useStyles();
  return (
    <div>
      <Box textAlign="center" mt={4}>
        <img src={Logo} alt="ARM's Logo" width="150px" />
      </Box>
      <Box mt={5}>
        <List component="nav">
          <ListItem
            button
            component={NavLink}
            to="/home"
            activeStyle={{
              background: "#1A202C",
            }}
            className={` ${classes.sentenceCase} ${classes.whiteText}`}
          >
            <ListItemIcon>
              <RiDashboard2Line size="20px" color="#fff" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            activeStyle={{
              background: "#1A202C",
            }}
            className={` ${classes.sentenceCase} ${classes.whiteText}`}
            to="/account"
          >
            <ListItemIcon>
              <RiUserLine size="20px" color="#fff" />
            </ListItemIcon>
            <ListItemText primary="My Account" />
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default SideNav;
