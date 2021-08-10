import { Button, MenuItem } from "@material-ui/core";
import {
  Box,
  Container,
  Select,
  InputLabel,
  Typography,
  makeStyles,
  TextField,
  Grid,
  FormControl,
} from "@material-ui/core";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
  mbSm: {
    marginBottom: theme.spacing(3),
  },
}));

const initialValues = {
  vendorType: "",
  companyName: "",
  companyRegistrationNumber: "",
};

const Signup = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Container>
        <Box mt={3}>
          <Typography
            style={{ color: "#34495e", fontWeight: 500 }}
            variant="h4"
          >
            Register with us today!
          </Typography>
          <Typography
            variant="h6"
            className={`${classes.mbSm}`}
            style={{ color: "#2c3e50", marginTop: ".4em" }}
          >
            Join Hundreds of Bidders and land your dream Project
          </Typography>
        </Box>

        <Box>
          <Formik
            initialValues={initialValues}
            onSubmit={(data) => {
              console.log(data);
              alert(JSON.stringify(data, null, 2));
            }}
            validationSchema={yup.object({
              vendorType: yup.string().required(),
              companyName: yup.string().required(),
              companyRegistrationNumber: yup.string().required(),
            })}
          >
            {({ values, handleBlur, handleChange }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <FormControl fullWidth>
                      <InputLabel id="ventorType">
                        What type of Vendor are you?
                      </InputLabel>
                      <Select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        labelId="ventorType"
                        name="vendorType"
                        defaultValue="Local Vendor Limited"
                      >
                        <MenuItem value="Local Vendor Limited">
                          Local Vendor Limited
                        </MenuItem>
                        <MenuItem value="Local Vendor (Non-Limited)">
                          Local Vendor (Non-Limited)
                        </MenuItem>
                        <MenuItem value="International Vendor">
                          International Vendor
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={3}>
                    <label>Company name</label>
                    <Field name="companyName" as={TextField} fullWidth />
                    <ErrorMessage
                      className={classes.error}
                      component="div"
                      name="companyName"
                    />
                  </Grid>

                  {values.vendorType === "International Vendor" && (
                    <Grid item xs={3}>
                      <label>Registration No</label>
                      <Field
                        name="companyRegistrationNumber"
                        as={TextField}
                        fullWidth
                        label=""
                      />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="companyRegistrationNumber"
                      />
                    </Grid>
                  )}
                </Grid>

                <Button type="submit">Submit Form</Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
