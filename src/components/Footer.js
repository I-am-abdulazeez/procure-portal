import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#303952",
    backgroundColor: "#fff",
  },
  mbMd: {
    marginBottom: theme.spacing(4),
  },
  mbLg: {
    marginBottom: theme.spacing(7),
  },
  whiteText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  List: {
    fontSize: "18px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Container>
          <Typography
            variant="h4"
            className={`${classes.bold} ${classes.mbMd}`}
          >
            About us
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="h5">News</Typography>
              <List component="nav">
                <ListItem className={classes.List}>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem className={classes.List}>
                  <ListItemText primary="Daily News" />
                </ListItem>
                <ListItem className={classes.List}>
                  <ListItemText primary="Daily News" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="h5">News</Typography>
              <List component="nav">
                <ListItem className={classes.List}>
                  <ListItemText primary="Daily News" />
                </ListItem>
                <ListItem className={classes.List}>
                  <ListItemText primary="Daily News" />
                </ListItem>
                <ListItem className={classes.List}>
                  <ListItemText primary="Daily News" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="h5">News</Typography>
              <List component="nav">
                <ListItem className={classes.List}>
                  <ListItemText primary="Daily News" />
                </ListItem>
                <ListItem className={classes.List}>
                  <ListItemText primary="Daily News" />
                </ListItem>
                <ListItem className={classes.List}>
                  <ListItemText primary="Daily News" />
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Box borderTop="2px solid #fcfcfc" pt={4}>
            <Typography variant="h6">&copy; Teknohub Solution</Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
