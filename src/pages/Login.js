import { useState } from "react";
import Logo from "../logo.png";
import { Formik, Form, Field } from "formik";
import {
  Box,
  TextField,
  Typography,
  makeStyles,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { object, string } from "yup";
import { RiEyeFill, RiEyeCloseFill, RiArrowLeftLine } from "react-icons/ri";

const validationSchema = object().shape({
  username: string().required("username is required!"),
  password: string().required("password is required!"),
});

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  textField: {
    marginBottom: "30px",
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
        <IconButton href="/">
          <RiArrowLeftLine />
        </IconButton>
      </Box>
      <div className="login">
        <Box width="280px" textAlign="center">
          <Box textAlign="center" mb="1.3rem">
            <img src={Logo} alt="Logo" width="150" />
          </Box>

          <Box>
            <Typography variant="h5" className={classes.title}>
              Sign in your account
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

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    disableElevation
                    type="submit"
                  >
                    Sign in
                  </Button>
                  <div></div>
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
