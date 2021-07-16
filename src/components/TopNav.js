import {
  Avatar,
  Badge,
  Box,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import { RiNotificationLine } from "react-icons/ri";
import { useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const TopNav = () => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <div>
      <Box
        height="8vh"
        px={4}
        bgcolor="white"
        width="100%"
        justifyContent="space-between"
        display="flex"
        alignItems="center"
      >
        <div>
          <Typography variant="h5" style={{ fontWeight: "500" }}>
            {location.pathname === "/home"
              ? "Dashboard"
              : location.pathname === "/account"
              ? "My Account"
              : "Settings"}
          </Typography>
        </div>
        <Box display="flex" flexDirection="row" gridGap="1em">
          <IconButton>
            <Badge color="secondary" variant="dot">
              <RiNotificationLine color="#000" />
            </Badge>
          </IconButton>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            gridGap={10}
          >
            <Avatar
              className={`${classes.small} ${classes.purple}`}
              alt="Remy Sharp"
              src=""
            >
              SD
            </Avatar>
            <Box>
              <div>
                <Typography variant="h6" style={{ fontWeight: "600" }}>
                  {" "}
                  Shola Dodeyinde
                </Typography>
              </div>
              <div>
                <Typography
                  variant="body1"
                  style={{ color: "#718096", fontWeight: "600" }}
                >
                  {" "}
                  Administrator
                </Typography>
              </div>
            </Box>
          </Box>
        </Box>
        {/* <Button onClick={() => getIt}>Get it</Button> */}
      </Box>
    </div>
  );
};

export default TopNav;
