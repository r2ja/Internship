import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateFormData } from '../../features/formDataSlice';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
});

const Page1 = ({ onSubmit }) => {
    const formData = useSelector((state) => state.formData);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(updateFormData(values));
        onSubmit();
    };

    return (
        <Formik
            initialValues={{
                firstName: formData.firstName,
                lastName: formData.lastName,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field
                        as={TextField}
                        name="firstName"
                        label="First Name"
                        error={touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        fullWidth
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="lastName"
                        label="Last Name"
                        error={touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
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

export default Page1;
