import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateFormData } from '../../features/formDataSlice';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const Page2 = ({ onSubmit }) => {
    const formData = useSelector((state) => state.formData);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(updateFormData(values));
        onSubmit();
    };

    return (
        <Formik
            initialValues={{
                email: formData.email,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        type="email"
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Next
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default Page2;
