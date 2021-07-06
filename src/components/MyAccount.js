import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  gridH: {
    height: "100vh",
  },
  darkBg: {
    background: "#2D3748",
  },
  lighBg: {
    background: "#F7FAFC",
  },
}));

const MyAccount = () => {
  const classes = useStyles();
  return (
    <div>
      <Box height="100vh" component={Grid} container>
        <Box component={Grid} item xs={2} className={classes.darkBg}>
          <SideNav />
        </Box>
        <Box component={Grid} item xs={10} className={classes.lighBg}>
          <TopNav />
        </Box>
      </Box>
    </div>
  );
};

export default MyAccount;
