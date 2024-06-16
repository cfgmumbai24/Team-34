

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = [
  'Newbie',
  'Explore stage & Coaching phase',
  'Training phase',
  'Expecting graduation from college',
];

export default function HorizontalLinearStepper({props}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', color: '#4cceac', p: 3 }}>
      <Stepper activeStep={props}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, color: '#4cceac' }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, color: '#4cceac' }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset} sx={{ color: '#4cceac' }}>
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button> */}
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1, color: '#4cceac' }}>
                Skip
              </Button>
            )} */}

            {/* Remove the 'Next' button */}
          {/* </Box> */}
        </React.Fragment>
      )}
    </Box>
  );
}