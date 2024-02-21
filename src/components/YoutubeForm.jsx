import React from 'react'
import { Field, Form, Formik } from 'formik'
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

  console.log("visited fields", formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
        <Form>
          <div className='form-control'>
              <label htmlFor='name'>Name</label>
              <Field 
                type='text' 
                id='name' 
                name='name' 
              />
              {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
            </div>

            <div className='form-control'>
              <label htmlFor='name'>E-mail</label>
              <Field 
                type='text' 
                id='email' 
                name='email' 
              />
              {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            </div>

            <div className='form-control'>
              <label htmlFor='channel'>Channel</label>
              <Field 
                type='text' 
                id='channel' 
                name='channel'
              />
              {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
            </div>

            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default YoutubeForm