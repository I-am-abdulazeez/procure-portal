import {
  Box,
  Button,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { Children, useState } from "react";

const useStyles = makeStyles((theme) => ({
  mr2: {
    marginRight: theme.spacing(2),
  },
}));

const FormikStepper = ({ children, ...props }) => {
  const classes = useStyles();
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  const isLastStep = () => {
    return step === childrenArray.length - 1;
  };

  console.log(childrenArray);

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ isValid, isSubmitting, dirty }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step
                key={child.props.label}
                completed={step > index || completed}
              >
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentChild}
          <Box mt={2} textAlign="right">
            {step > 0 && (
              <Button
                className={classes.mr2}
                variant="contained"
                onClick={() => setStep((s) => s - 1)}
              >
                Back
              </Button>
            )}
            <Button
              disabled={!isValid || !dirty || isSubmitting}
              variant="contained"
              color="primary"
              type="submit"
            >
              {isLastStep() ? "Submit" : "Next"}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default FormikStepper;
