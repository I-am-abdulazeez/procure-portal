import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { IoDuplicateOutline, IoKey, IoPerson } from "react-icons/io5";
import { RiDoorOpenLine } from "react-icons/ri";
import Typist from "react-typist";
import { CallAOS } from "../components/Aos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#303952",
    backgroundColor: "#fff",
  },
  paddingXSm: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  mtSm: {
    marginTop: theme.spacing(3),
  },
  mbSm: {
    marginBottom: theme.spacing(3),
  },
  mbMd: {
    marginBottom: theme.spacing(4),
  },
  mbLg: {
    marginBottom: theme.spacing(7),
  },
  title: {
    fontSize: "15px",
    fontWeight: 700,
  },
  whiteText: {
    color: "#fff",
    fontWeight: "bold",
  },
  whiteTextLess: {
    color: "#fff",
    fontWeight: 400,
  },
  semiBold: {
    fontWeight: 400,
  },
  center: {
    textAlign: "center",
  },
  text: {
    fontWeight: 400,
    color: "#333",
    lineHeight: 1.9,
    fontSize: "17px",
  },
  card: {
    "&:hover": {
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      cursor: "pointer",
      transition: "all 0.8s ease-in-out",
    },
  },
  pbSm: {
    paddingBottom: "16px",
  },
  grey: {
    background: "#fff",
  },
  boxy: {
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    width: "60px",
    marginBottom: "20px",
    height: "60px",
  },
  boxy2: {
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c0392b",
    width: "60px",
    marginBottom: "20px",
    height: "60px",
  },
  boxy3: {
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20bf6b",
    width: "60px",
    marginBottom: "20px",
    height: "60px",
  },
  boxy4: {
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#474787",
    width: "60px",
    marginBottom: "20px",
    height: "60px",
  },
}));

const Home = () => {
  const classes = useStyles();
  CallAOS();

  return (
    <div className={classes.root}>
      <Navbar />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        fontWeight="bold"
        className="home-bg"
        height="80vh"
      >
        <div>
          <Typography variant="h3" className={`${classes.whiteText}`}>
            The Efficient Procurement Portal
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold" }}
            className={`${classes.mtSm} ${classes.whiteTextLess}`}
          >
            <Typist cursor={{ blink: true }}>
              A Portal where
              <Typist.Delay ms={200} />
              <span>{""} Bidders and Tenders interact..</span>
              <Typist.Backspace count={36} delay={600} />
              <span style={{ lineHeight: 1.9 }}>
                that maintain good supplier relations
                <br /> and negotiating contracts.
              </span>
            </Typist>
          </Typography>
        </div>
      </Box>

      <Box paddingY="2rem">
        <Container>
          <Typography
            variant="h4"
            className={`${classes.bold} ${classes.center} ${classes.mbSm}`}
          >
            What We do...
          </Typography>

          <Typography variant="h6" className={classes.text}>
            Procurement Officers are responsible for evaluating suppliers,
            products, and services, negotiating contracts, and ensuring that
            approved purchases are cost-efficient and of high quality. Following
            and enforcing the company's procurement policies and procedures.
            Reviewing, comparing, analyzing, and approving products and services
            to be purchased. Managing inventories and maintaining accurate
            purchase and pricing records. Maintaining and updating supplier
            information such as qualifications, delivery times, product ranges,
            etc. Maintaining good supplier relations and negotiating contracts.
            Researching and evaluating prospective suppliers. Preparing budgets,
            cost analyses, and reports.
          </Typography>
        </Container>
      </Box>

      <Box paddingY="2rem">
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Card
                variant="outlined"
                className={`${classes.card}`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <CardContent>
                  <Box className={classes.boxy}>
                    <RiDoorOpenLine color="#fff" size="32px" />
                  </Box>
                  <Typography
                    className={classes.title}
                    style={{
                      marginBottom: "10px",
                      color: "#2c3e50",
                      marginTop: "10px",
                    }}
                    gutterBottom
                  >
                    PETITION SUBMISSION
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ color: "#7f8c8d" }}
                    className={classes.semiBold}
                  >
                    Did you know petition submissions are currently online?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="text" color="primary">
                    Submit now
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card
                elevation={0}
                data-aos="fade-up"
                data-aos-delay="300"
                variant="outlined"
                className={classes.card}
              >
                <CardContent>
                  <Box className={classes.boxy2}>
                    <IoDuplicateOutline color="#fff" size="32px" />
                  </Box>
                  <Typography
                    className={classes.title}
                    style={{
                      marginBottom: "10px",
                      color: "#2c3e50",
                      marginTop: "10px",
                    }}
                    gutterBottom
                  >
                    VENDOR REGISTRATION
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ color: "#7f8c8d" }}
                    className={classes.semiBold}
                  >
                    Are you a Vendor? Click Register to get started.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="text" color="primary">
                    Register Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card
                elevation={0}
                data-aos="fade-up"
                data-aos-delay="400"
                variant="outlined"
                className={classes.card}
              >
                <CardContent>
                  <Box className={classes.boxy3}>
                    <IoPerson color="#fff" size="32px" />
                  </Box>
                  <Typography
                    className={classes.title}
                    style={{
                      marginBottom: "10px",
                      color: "#2c3e50",
                      marginTop: "10px",
                    }}
                    gutterBottom
                  >
                    PROCUREMENT OFFICER PROFILE
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ color: "#7f8c8d" }}
                    className={classes.semiBold}
                  >
                    Are you a procurement officer? Update your profile now!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="text" color="primary">
                    Start Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={3}>
              <Card
                elevation={0}
                data-aos="fade-up"
                data-aos-delay="500"
                variant="outlined"
                className={classes.card}
              >
                <CardContent>
                  <Box className={classes.boxy4}>
                    <IoKey color="#fff" size="32px" />
                  </Box>
                  <Typography
                    className={classes.title}
                    style={{
                      marginBottom: "10px",
                      color: "#2c3e50",
                      marginTop: "10px",
                    }}
                    gutterBottom
                  >
                    WHISTLE BLOWING
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ color: "#7f8c8d" }}
                    className={classes.semiBold}
                  >
                    Report any suspicious procurement activity.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="text" color="primary">
                    Report Here
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box mt={9} bgcolor="#2c3e50" py={7}>
        <Container>
          <Typography
            variant="h4"
            className={`${classes.bold} ${classes.whiteText} ${classes.mbLg}`}
          >
            Latest information
          </Typography>

          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Card
                  data-aos="zoom-in-up"
                  elevation={0}
                  className={classes.grey}
                >
                  <CardContent
                    style={{ paddingBottom: "16px", color: "#444" }}
                    className={`${classes.pbSm} ${classes.bold}`}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      Bidders Update your Personal Details on the Profile page
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card
                  data-aos="zoom-in-up"
                  className={classes.grey}
                  elevation={0}
                >
                  <CardContent
                    style={{ paddingBottom: "16px" }}
                    className={`${classes.pbSm} ${classes.bold}`}
                  >
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold", color: "#444" }}
                    >
                      Teknohub planning to Digitalize Procurement
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card
                  data-aos="zoom-in-up"
                  className={classes.grey}
                  elevation={0}
                >
                  <CardContent
                    style={{ paddingBottom: "16px", color: "#444" }}
                    className={`${classes.pbSm} ${classes.bold}`}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      2021 Procurement Training Going on
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card
                  data-aos="zoom-in-up"
                  className={classes.grey}
                  elevation={0}
                >
                  <CardContent
                    style={{ paddingBottom: "16px", color: "#444" }}
                    className={`${classes.pbSm} ${classes.bold}`}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      All Bidders and Tenders can now add multiple Address
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6}>
                <Card
                  data-aos="zoom-in-up"
                  className={classes.grey}
                  elevation={0}
                >
                  <CardContent
                    style={{ paddingBottom: "16px", color: "#444" }}
                    className={`${classes.pbSm} ${classes.bold}`}
                  >
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>
                      Read Code of Consuct to maintain idealness.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        p={6}
        d="flex"
        h="100vh"
        alignItems="center"
        borderBottom="1px solid #E2E8F0"
      >
        <Container>
          <Typography
            variant="h4"
            className={`${classes.bold} ${classes.center}`}
          >
            Register on one Click
          </Typography>
          <div className={`${classes.center} ${classes.mtSm}`}>
            <Button
              variant="outlined"
              href="/register"
              color="primary"
              size="large"
            >
              Register Now
            </Button>
          </div>
        </Container>
      </Box>

      <Box mt={3}>
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
