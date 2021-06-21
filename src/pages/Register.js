import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import { RiArrowLeftLine, RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import * as yup from "yup";
import SignUpImage from ".././signup.svg";
import FormikStepper from "../components/FormikStepper";
import UploadField from "../components/UploadField";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#303952",
  },
  title: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  textField: {
    marginBottom: "30px",
  },
  bold: {
    fontWeight: "bold",
  },
  lineHeight: {
    lineHeight: 1.7,
    color: "#303952",
  },
  mbSm: {
    marginBottom: theme.spacing(6),
  },
  whiteText: {
    color: "#fff",
  },
  mr2: {
    marginRight: theme.spacing(2),
  },
  error: {
    color: "#e74c3c",
    marginTop: ".5rem",
  },
}));

const initialValues = {
  companyName: "",
  vatRegNumber: "",
  taxIdNumber: "",
  companyDateOfReg: "",
  certOfInCorporationNo: "",
  registeredOfficeAddress: "",
  state: "",
  phoneNumber: "",
  email: "",
  password: "",
  memoradum_ArticlesOfAssociation: [],
  certificateOfIncorporation: [],
  formCO7_PartcularsOfDirectors: [],
  vatRegistrationCertificate: [],
  taxClearanceCertificate: [],
};

const Register = () => {
  const classes = useStyles();
  const [showVal, setShowVal] = useState({ showPassword: false });

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Box bgcolor="#2980b9" height="100vh">
            <Box textAlign="left">
              <IconButton href="/">
                <RiArrowLeftLine color="#fff" />
              </IconButton>
            </Box>
            <Box
              bgcolor="#2980b9"
              height="90vh"
              p={4}
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h4"
                  className={`${classes.mbSm} ${classes.whiteText}`}
                >
                  Register with us today!
                </Typography>
                <img src={SignUpImage} alt="sign-up" width="350" />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            height="100vh"
            bgcolor="#fff"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box width="500px">
              <Typography
                variant="h5"
                className={`${classes.title} ${classes.bold} ${classes.lineHeight}`}
              >
                Join Hundreds of Bidders and land your dream Project
              </Typography>
              <FormikStepper
                initialValues={initialValues}
                onSubmit={async (values, { setSubmitting }) => {
                  setSubmitting(true);
                  const newData = {
                    companyName: values.companyName,
                    vatRegNo: values.vatRegNo,
                    taxIdNumber: values.taxIdNumber,
                    companyDateRegDate: values.companyDateOfReg,
                    certOfIncorporationNo: values.certOfInCorporationNo,
                    regOfficeAddress: values.regOfficeAddress,
                  };
                  // await sleep(3000);
                  try {
                    const res = await axios.post(
                      "http://192.168.0.52:7048/BC180/api/beta/companies(e80ce290-5dcc-eb11-817c-1c98ec2aab3b)/vendorRegistrations",
                      newData,
                      {
                        auth: {
                          username: "THL",
                          password: "T@sting1",
                        },
                      }
                    );
                    const data = res.data;
                    setSubmitting(false);
                    // alert(JSON.stringify(values, null, 2));
                    console.log(data);
                  } catch (error) {
                    setSubmitting(false);
                    console.log(error.response.data);
                  }
                }}
              >
                <FormikStep
                  label="Company Details"
                  validationSchema={yup.object({
                    companyName: yup
                      .string()
                      .required("Company Name is required"),
                    vatRegNumber: yup.string().required("is a required field"),
                    taxIdNumber: yup.string().required("is a required field"),
                    companyDateOfReg: yup
                      .string()
                      .required("is a required field"),
                    certOfInCorporationNo: yup
                      .string()
                      .required("is a required field"),
                  })}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Company name</label>
                      <Field
                        name="companyName"
                        as={TextField}
                        fullWidth
                        label=""
                      />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="companyName"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label>VAT Reg No</label>
                      <Field name="vatRegNumber" as={TextField} fullWidth />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="vatRegNumber"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Tax Id Number</label>
                      <Field name="taxIdNumber" as={TextField} fullWidth />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="taxIdNumber"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Company Date of Registration Date</label>
                      <Field
                        name="companyDateOfReg"
                        as={TextField}
                        fullWidth
                        type="date"
                      />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="companyDateOfReg"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Certificate of Incorporation No</label>
                      <Field
                        name="certOfInCorporationNo"
                        as={TextField}
                        fullWidth
                      />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="certOfInCorporationNo"
                      />
                    </Grid>
                  </Grid>
                </FormikStep>
                <FormikStep
                  label="Company Registration Details"
                  validationSchema={yup.object({
                    registeredOfficeAddress: yup
                      .string()
                      .required("Address is required"),
                    state: yup.string().required("State is required"),
                    phoneNumber: yup.string().required("is a required field"),
                    email: yup
                      .string()
                      .required()
                      .email("Email is baddly formatted!"),
                    password: yup
                      .string()
                      .required("password is required")
                      .min(6, "Minimum of 6 characters"),
                  })}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Registered Office Address</label>
                      <Field
                        name="registeredOfficeAddress"
                        as={TextField}
                        fullWidth
                      />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="registeredOfficeAddress"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label>State</label>
                      <Field name="state" as={TextField} fullWidth />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="state"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Email Address</label>
                      <Field name="email" as={TextField} fullWidth />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="email"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Password</label>
                      <Field
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              onClick={() =>
                                setShowVal({
                                  ...showVal,
                                  showPassword: !showVal.showPassword,
                                })
                              }
                              position="end"
                            >
                              {showVal.showPassword ? (
                                <RiEyeFill />
                              ) : (
                                <RiEyeCloseFill />
                              )}
                            </InputAdornment>
                          ),
                        }}
                        type={showVal.showPassword ? "text" : "password"}
                        name="password"
                        as={TextField}
                        fullWidth
                      />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="password"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label>Phone Number</label>
                      <Field name="phoneNumber" as={TextField} fullWidth />
                      <ErrorMessage
                        className={classes.error}
                        component="div"
                        name="phoneNumber"
                      />
                    </Grid>
                  </Grid>
                </FormikStep>
                <FormikStep
                  label="File Attachments"
                  validationSchema={yup.object({
                    memoradum_ArticlesOfAssociation: yup.array(
                      yup.object({
                        url: yup.string().required(),
                      })
                    ),
                    certificateOfIncorporation: yup.array(
                      yup.object({
                        url: yup.string().required(),
                      })
                    ),
                    formCO7_PartcularsOfDirectors: yup.array(
                      yup.object({
                        url: yup.string().required(),
                      })
                    ),
                    vatRegistrationCertificate: yup.array(
                      yup.object({
                        url: yup.string().required(),
                      })
                    ),
                    taxClearanceCertificate: yup.array(
                      yup.object({
                        url: yup.string().required(),
                      })
                    ),
                  })}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <UploadField
                        title="Upload memoradum Articles Of Association. Drag 'n' drop here, or click to select file"
                        name="memoradum_ArticlesOfAssociation"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <UploadField
                        title="Upload certificate Of Incorporation. Drag 'n' drop some files here, or click to select file"
                        name="certificateOfIncorporation"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <UploadField
                        title="Upload formCO7 Partculars Of Directors. Drag 'n' drop some files here, or click to select file"
                        name="formCO7_PartcularsOfDirectors"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <UploadField
                        title="Upload VAT Registration Certificate. Drag 'n' drop some files here, or click to select files"
                        name="vatRegistrationCertificate"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <UploadField
                        title="Upload tax Clearance Certificate. Drag 'n' drop some files here, or click to select files"
                        name="taxClearanceCertificate"
                      />
                    </Grid>
                  </Grid>
                </FormikStep>
              </FormikStepper>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;

export const FormikStep = ({ children }) => {
  return <>{children}</>;
};
