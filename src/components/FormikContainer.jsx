import React from 'react'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {

    const dropDownOptions = [
        { key : 'Select an option', value: ''},
        { key : 'Option 1', value: 'option1'},
        { key : 'Option 2', value: 'option2'},
        { key : 'Option 3', value: 'option3'},
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: ''
    };

    const validationSchema = yup.object({
        email: yup.string().required('Required'),
        description: yup.string().required(),
        selectOption: yup.string().required()
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

                <FormikControl 
                    control= 'textarea'
                    label= 'Description'
                    name= 'description'
                />

                <FormikControl
                    control= 'select'
                    label = 'Select a topic'
                    name = 'selectOption'
                    options= {dropDownOptions}
                />

                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
  )
}

export default FormikContainer