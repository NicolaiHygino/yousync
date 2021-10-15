import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import logo from 'assets/images/yousync-group-logo.png';
import {
  LoginContent,
  StyledForm,
  StyledField,
  FieldWrapper,
  StyledError,
  Button,
  Image,
  Required
} from './style';

const Login = ({ socket, handleLogin }) => {
  const handleSubmit = (values) => {
    socket.emit('login', values, handleLogin(values.username, values.room))
  }

  return (
    <LoginContent>
      <Image src={logo} />
      <Formik
        initialValues={{ username: '', room: '' }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required')
        })}
        onSubmit={values => handleSubmit(values)}
      >
      <StyledForm>
        <FieldWrapper>
          <label htmlFor="username">Username <Required>*</Required></label>
          <StyledError component="span" name="username" />
          <StyledField name="username" type="text" />
        </FieldWrapper>

        <FieldWrapper>
          <label htmlFor="Room Code">Room Code</label>
          <StyledField name="room" type="text" />
          <StyledError name="room" />
        </FieldWrapper>

        <Button type="submit">Enter</Button>
      </StyledForm>
      </Formik>
    </LoginContent>
  );
};

export default Login
