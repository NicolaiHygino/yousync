import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login = ({ socket, handleLogin }) => {
  const handleSubmit = (values) => {
    socket.emit('login', values, handleLogin(values.username, values.room))
  }

  return (
    <Formik
      initialValues={{ username: '', room: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
      })}
      onSubmit={values => handleSubmit(values)}
    >
    <Form>
      <label htmlFor="username">Username</label>
      <Field name="username" type="text" />
      <ErrorMessage name="username" />

      <label htmlFor="Room Code">Room Code</label>
      <Field name="room" type="text" />
      <ErrorMessage name="room" />
      
      <button type="submit">Enter</button>
    </Form>
    </Formik>
  )
}

export default Login
