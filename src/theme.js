import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      white: " #fff",
    },
    primary: {
      main: "#2980b9",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 12,
  },
});

export default theme;
