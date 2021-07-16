import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import TopNav from "../components/TopNav";

const Settings = () => {
  return (
    <div>
      <TopNav />
      <Box pt={3}>
        <Container>
          <Typography style={{ fontWeight: "bold" }} variant="h4">
            Account Settings
          </Typography>
          <Typography
            style={{
              marginBottom: "1.5em",
              fontWeight: 500,
              marginTop: ".6em",
            }}
            variant="body1"
          >
            Here you can change your current password to a new one
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField fullWidth id="standard-basic" label="Old Password" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth id="standard-basic" label="New Password" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Confirm Password"
              />
            </Grid>
            <Grid item xs={3} style={{ alignSelf: "flex-end" }}>
              <Button variant="contained" color="primary">
                Update Password
              </Button>
            </Grid>
          </Grid>

          <Box mt={4}>
            <Typography style={{ fontWeight: "bold" }} variant="h4">
              Profile Settings
            </Typography>
            <Typography
              style={{
                marginBottom: "1.5em",
                fontWeight: 500,
                marginTop: ".6em",
              }}
              variant="body1"
            >
              Here you can change your Username or Email Address to a new one
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Username"
                value="Shola Shodeyinde"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Email Address"
                value="sholasholly@outlook.com"
              />
            </Grid>
            <Grid item xs={3} style={{ alignSelf: "flex-end" }}>
              <Button variant="contained" color="primary">
                Update
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Settings;
