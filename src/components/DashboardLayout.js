import { Box, Grid, makeStyles } from "@material-ui/core";
import SideNav from "./SideNav";

const useStyles = makeStyles((theme) => ({
  darkBg: {
    background: "#2D3748",
  },
}));

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Box height="100vh" component={Grid} container>
      <Box component={Grid} item xs={2} className={classes.darkBg}>
        <SideNav />
      </Box>
      <Box component={Grid} item xs={10}>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
