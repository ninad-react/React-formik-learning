import React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from "yup"

const initialValues = {
    name: '',
    email: '',
    channel: ''
};

const onSubmit = values => {
  console.log('form values', values);
};


const validationSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email format').required('Required'),
  channel: yup.string().required('Required')

})

const YoutubeForm = () => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
        <Form>
          <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <Field type='text' id='name' name='name' />
              <ErrorMessage name='name'/>
            </div>

            <div className='form-control'>
              <label htmlFor='name'>E-mail</label>
              <Field 
                type='text' id='email' name='email' />
              <ErrorMessage name='email' />
            </div>

            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
              <Field 
                type='text' 
                id='channel' 
                name='channel'
              />
              <ErrorMessage name='channel'/>
            </div>

            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default YoutubeForm