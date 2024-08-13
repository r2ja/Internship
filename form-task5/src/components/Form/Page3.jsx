import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateFormData, resetFormData } from '../../features/formDataSlice';

const validationSchema = Yup.object().shape({
    aboutYou: Yup.string().required('Please provide some information about yourself'),
});

const Page3 = ({ onSubmit }) => {
    const formData = useSelector((state) => state.formData);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(updateFormData(values));
        onSubmit();
    };

    const handleReset = () => {
        dispatch(resetFormData());
    };

    return (
        <Formik
            initialValues={{
                aboutYou: formData.aboutYou,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field
                        as={TextField}
                        name="aboutYou"
                        label="About You"
                        multiline
                        rows={4}
                        error={touched.aboutYou && !!errors.aboutYou}
                        helperText={touched.aboutYou && errors.aboutYou}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Finish
                    </Button>
                    <Button type="button" variant="contained" onClick={handleReset}>
                        Reset
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default Page3;
