import React from 'react'
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {

    const dropDownOptions = [
        { key : 'Select skill', value: ''},
        { key : 'JavaScript', value: 'JavaScript'},
        { key : 'Java', value: 'Java'},
        { key : 'Python', value: 'Python'},
    ]

    const radioOptions = [
        { key : 'Male', value: 'Male'},
        { key : 'Female', value: 'Female'},
        { key : 'Other', value: 'Other'},
    ]

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        description: '',
        selectOption: '',
        radioOption: '',
        birthDate: null
    };

    const validationSchema = yup.object({
        email: yup.string().required('Required'),
        password: yup.string().required(),
        confirmPassword: yup.string().required(),
        description: yup.string().required(),
        selectOption: yup.string().required(),
        radioOption: yup.string().required(),
        birthDate: yup.date().required().nullable()
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
                    control="input" 
                    type="text" 
                    label="Password" 
                    name="password" 
                />

                <FormikControl 
                    control="input" 
                    type="text" 
                    label="Confirm Password" 
                    name="confirmPassword" 
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

                <FormikControl 
                    control= 'radio'
                    label= 'Gender'
                    name= 'radioOption'
                    options={radioOptions}
                />

                <FormikControl
                    control= 'date'
                    label= 'Date of Birth'
                    name= 'birthDate'
                />
  
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
  )
}

export default FormikContainer