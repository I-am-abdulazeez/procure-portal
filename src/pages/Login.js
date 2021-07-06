import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { RiArrowLeftLine, RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import Logo from "../logo.png";

const validationSchema = object().shape({
  username: string().required("username is required!"),
  password: string().required("password is required!"),
});

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  brandColor: {
    color: theme.palette.primary.main,
  },
  clearUnderline: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  textField: {
    marginBottom: "10px",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState({ password: false });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Box bgcolor="#fff  ">
        <Button href="/" startIcon={<RiArrowLeftLine />}>
          Go home
        </Button>
      </Box>
      <div className="login">
        <Box width="290px" textAlign="center">
          <Box textAlign="center" mb="1rem">
            <img src={Logo} alt="Logo" width="130" />
          </Box>

          <Box>
            <Typography variant="h5" className={classes.title}>
              Welcome back,
            </Typography>

            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={validationSchema}
            >
              {({ values, touched }) => (
                <Form>
                  <Box>
                    <Field
                      name="username"
                      type="text"
                      label="Username"
                      as={TextField}
                      fullWidth
                      variant="outlined"
                      size="small"
                      className={classes.textField}
                    />
                  </Box>
                  <Box>
                    <Field
                      name="password"
                      type={showPassword ? "password" : "text"}
                      label="Password"
                      as={TextField}
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                            >
                              {showPassword ? (
                                <RiEyeCloseFill size="15px" />
                              ) : (
                                <RiEyeFill size="15px" />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      size="small"
                      variant="outlined"
                      className={classes.textField}
                    />
                  </Box>

                  <Box mt={2}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      disableElevation
                      type="submit"
                    >
                      Sign in
                    </Button>
                  </Box>
                  <Box mt={3}>
                    <Typography>
                      I don't have an account?
                      <Link
                        to="/register"
                        className={`${classes.brandColor} ${classes.clearUnderline}`}
                      >
                        {""} Create here
                      </Link>
                    </Typography>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Login;
