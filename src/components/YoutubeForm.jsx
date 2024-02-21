import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    name: '',
    email: '',
    channel: ''
};

const onSubmit = values => {
  console.log('form values', values);
};

const validate = values => {

  // values.name values.email values.channel
  // errors.name errors.email error.channel
  let errors = {}

  if(!values.name){
    errors.name = "Required";
  }

  if(!values.email){
    errors.email = "Required";
  }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid Email Format"
  }

  if(!values.channel){
    errors.channel = "Required";
  }

  return errors;
}

const YoutubeForm = () => {

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate
  });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input 
              type='text' 
              id='name' 
              name='name' 
              onChange={formik.handleChange} 
              value={formik.values.name}/>

            <label htmlFor='name'>E-mail</label>
            <input 
              type='text' 
              id='email' 
              name='email' 
              onChange={formik.handleChange} 
              value={formik.values.email}/>

            <label htmlFor='channel'>Channel</label>
            <input 
              type='text' 
              id='channel' 
              name='channel'
              onChange={formik.handleChange}
              value={formik.values.channel}
            />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm