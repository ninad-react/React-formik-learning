import React from 'react'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {

    const initialValues = {
        email: '',

    };

    const validationSchema = yup.object({
        email: yup.string().required('Required')
    });

    const onSubmit = values => console.log('Form data', values);

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {formik => (
            <Form>
                <FormikControl 
                    control="input" 
                    type="email" 
                    label="Email" 
                    name="email" 
                />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
  )
}

export default FormikContainer