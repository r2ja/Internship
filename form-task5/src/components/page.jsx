// page.jsx
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Page1 from './Form/Page1';
import Page2 from './Form/Page2';
import Page3 from './Form/Page3';
import { updateFormData, resetFormData } from '../features/formDataSlice';

const steps = ['Page 1', 'Page 2', 'About You'];

const Homepage = () => {
    const formData = useSelector((state) => state.formData);
    const dispatch = useDispatch();

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // dispatch any final actions upon form submission
    };

    const handlePageSubmit = useCallback(() => {
        if (activeStep === steps.length - 1) {
            handleSubmit();
        }
    }, [activeStep, handleSubmit]);

    const handleReset = () => {
        dispatch(resetFormData());
        setActiveStep(0);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <Page1 onSubmit={handleNext} />;
            case 1:
                return <Page2 onSubmit={handleNext} />;
            case 2:
                return <Page3 onSubmit={handleNext} />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <Box sx={{ bgcolor: '#ababab', margin: '2rem', borderRadius: '16px' }}>
            <Box sx={{ padding: 3 }}>

                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box>
                    {getStepContent(activeStep)}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={activeStep === 0 ? handleReset : handleBack}
                            sx={{ mr: 1 }}
                        >
                            {activeStep === 0 ? 'Reset' : 'Back'}
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {/* {activeStep === steps.length - 1 ? (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handlePageSubmit}
                            >
                                Finish
                            </Button>
                        ) 
                        : (
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handlePageSubmit}
                            >
                                Next */}
                            {/* </Button> */}
                        
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default Homepage;
