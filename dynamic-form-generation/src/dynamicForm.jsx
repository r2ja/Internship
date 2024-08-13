import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import {
    Box,
    Typography,
    FormControlLabel,
    FormControl,
    InputLabel,
    Checkbox,
    Button,
    Select,
    MenuItem,
} from '@mui/material';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required.'),

    lastName: Yup.string().required('Last Name is required.'),

    age: Yup.number()
        .required('Age is required')
        .positive('Must be a positive number')
        .integer('Must be a number'),

    isInUniversity: Yup.boolean(),

    discipline: Yup.string().when('isInUniversity', {
        is: true,
        then: () => Yup.string().required('Discipline is required'),
        otherwise: () => Yup.string().notRequired(),
    }),

    details: Yup.string().when(['isInUniversity', 'discipline'], {
        is: (isInUniversity, discipline) => isInUniversity && ['BSCS', 'BSME', 'BSCE'].includes(discipline),
        then: () => Yup.string().required('Details are required'),
        otherwise: () => Yup.string().notRequired(),
    }),
    
});

const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    isInUniversity: false,
    discipline: '',
    details: '',
};

const DynamicForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ values, errors, touched, isSubmitting }) => (
                <Form>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>

                        <Field
                            as={TextField}
                            name="firstName"
                            label="First Name"
                            error={touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                        />

                        <Field
                            as={TextField}
                            name="lastName"
                            label="Last Name"
                            error={touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                        />

                        <Field
                            as={TextField}
                            type="number"
                            name="age"
                            label="Age"
                            error={touched.age && !!errors.age}
                            helperText={touched.age && errors.age}
                        />

                        {values.age >= 18 && (
                            <FormControlLabel
                                control={<Field as={Checkbox} name="isInUniversity" />}
                                label="Are you in University?"
                            />
                        )}

                        {values.isInUniversity && (
                            <FormControl fullWidth>
                                <InputLabel id="discipline-label">Discipline</InputLabel>
                                <Field
                                    as={Select}
                                    name="discipline"
                                    labelId="discipline-label"
                                    error={touched.discipline && !!errors.discipline}
                                >
                                    <MenuItem value="BSCS">BSCS</MenuItem>
                                    <MenuItem value="BSME">BSME</MenuItem>
                                    <MenuItem value="BSCE">BSCE</MenuItem>
                                    <MenuItem value="">None</MenuItem>
                                </Field>
                                {touched.discipline && !!errors.discipline && (
                                    <Typography color="error">{errors.discipline}</Typography>
                                )}
                            </FormControl>
                        )}

                        {values.discipline && values.discipline !== '' && (
                            <Field
                                as={TextField}
                                name="details"
                                label={`Details for ${values.discipline}`}
                                multiline
                                rows={4}
                                error={touched.details && !!errors.details}
                                helperText={touched.details && errors.details}
                            />
                        )}

                        <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                            Submit
                        </Button>

                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default DynamicForm;
