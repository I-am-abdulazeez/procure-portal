import { makeStyles } from "@material-ui/core";
import React from "react";
import TopNav from "../components/TopNav";

const useStyles = makeStyles(() => ({}));

const MyAccount = () => {
  const classes = useStyles();
  return (
    <div>
      <TopNav />
    </div>
  );
};

export default MyAccount;
