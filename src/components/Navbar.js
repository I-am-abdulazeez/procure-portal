import {
  AppBar,
  Toolbar,
  Container,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../logo.png";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.background.white,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `#303952`,
  },
}));

const navLinks = [
  { title: `About us`, path: `/about-us` },
  { title: `Tenders`, path: `/product` },
  { title: `Bidders`, path: `/blog` },
  { title: `contact`, path: `/contact` },
  { title: `faq`, path: `/faq` },
];

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className="navbar">
      <AppBar
        position="static"
        className={classes.bg}
        elevation={0}
        color="inherit"
      >
        <Toolbar>
          <Container className={classes.navbarDisplayFlex}>
            <Link to="/" style={{ marginTop: "5px" }}>
              <img width="100px" src={Logo} alt="Teknohub Logo" />
            </Link>

            <List
              className={classes.navDisplayFlex}
              component="nav"
              aria-labelledby="main navigation"
            >
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
              <Box ml={2} display="flex" alignItems="center">
                <Button
                  variant="contained"
                  href="/login"
                  disableElevation
                  color="primary"
                >
                  Login
                </Button>
              </Box>

              <Box ml={2} display="flex" alignItems="center">
                <Button
                  variant="text"
                  href="/signup"
                  disableElevation
                  color="secondary"
                >
                  Register
                </Button>
              </Box>
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
