import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import React from "react";
import {
  RiBook3Line,
  RiBriefcase4Line,
  RiHandCoinLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

const useStyles = makeStyles((theme) => ({
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
  mlSm: {
    marginLeft: theme.spacing(2),
    fontWeight: 500,
    color: "#2D3748",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Box height="100vh" component={Grid} container>
        <Box component={Grid} item xs={2} className={classes.darkBg}>
          <SideNav />
        </Box>
        <Box component={Grid} item xs={10} className={classes.lighBg}>
          <TopNav />
          <Box pt={3}>
            <Container>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Box
                    bgcolor="white"
                    borderRadius="7px"
                    border="1.5px solid #EDF2F7"
                    p={2}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography style={{ color: "#718096" }} variant="h6">
                        Invoices
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={1}
                        borderRadius="6px"
                        bgcolor="#C53030"
                      >
                        <RiBook3Line size="22px" color="#fff" />
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          color: "#2D3748",
                          marginTop: "5px",
                        }}
                        variant="h4"
                      >
                        400
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    bgcolor="white"
                    borderRadius="7px"
                    border="1.5px solid #EDF2F7"
                    p={2}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography style={{ color: "#718096" }} variant="h6">
                        Purchase Order
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={1}
                        borderRadius="6px"
                        bgcolor="#38A169"
                      >
                        <RiHandCoinLine size="22px" color="#fff" />
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          color: "#2D3748",
                          marginTop: "5px",
                        }}
                        variant="h4"
                      >
                        40
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    bgcolor="white"
                    borderRadius="7px"
                    border="1.5px solid #EDF2F7"
                    p={2}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography style={{ color: "#718096" }} variant="h6">
                        Request for Quotation
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={1}
                        borderRadius="6px"
                        bgcolor="#cd6133"
                      >
                        <RiSendPlaneLine size="22px" color="#fff" />
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          color: "#2D3748",
                          marginTop: "5px",
                        }}
                        variant="h4"
                      >
                        150
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    bgcolor="white"
                    borderRadius="7px"
                    border="1.5px solid #EDF2F7"
                    p={2}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography style={{ color: "#718096" }} variant="h6">
                        Vendors
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={1}
                        borderRadius="6px"
                        bgcolor="#474787"
                      >
                        <RiBriefcase4Line size="22px" color="#fff" />
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          color: "#2D3748",
                          marginTop: "5px",
                        }}
                        variant="h4"
                      >
                        15
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* Next List After Card */}
          <Box mt={3}>
            <Container>
              <Typography variant="h5">List</Typography>
            </Container>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
