import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { LoginPropsType, LogInType } from '../Login';
import s from '../Login.module.scss';
import Error from './TextError/TextError';

const LoginForm: React.FC<LoginPropsType> = (props) => {
  const captchaURL = props.captchaURL;

  const initialValues: LogInType = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: '',
  };

  const validationSchema = yup.object({
    email: yup.string().email(`Invalid email format`).required(`Required`),
    password: yup.string().required(`Required`),
  });

  const onSubmit = (values: LogInType, { setSubmitting, setStatus }: any) => {
    props.logIn(values, setStatus);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
        <Form className={s.loginPage__form}>
          <div className={s.loginPage__formControl}>
            <label className={s.loginPage__formLabel} htmlFor='email'>
              Email
            </label>
            <Field
              className={s.loginPage__formInput}
              name='email'
              id='email'
              type='text'
            />
            <ErrorMessage name='email' component={Error} />
          </div>
          <div className={s.loginPage__formControl}>
            <label className={s.loginPage__formLabel} htmlFor='password'>
              Password
            </label>
            <div className={s.loginPage__formInputBox}>
              <Field
                className={s.loginPage__formInput}
                name='password'
                id='password'
                type='password'
              />
            </div>
            <ErrorMessage name='password' component={Error} />
          </div>

          <div className={s.loginPage__formControl_checkbox}>
            <label className={s.loginPage__formLabel} htmlFor='rememberMe'>
              Remember me
            </label>
            <Field name='rememberMe' id='checkbox' type='checkbox' />
          </div>

          {captchaURL ? (
            <div className={s.loginPage__formControl}>
              <img src={captchaURL} alt='captcha' />
              <label className={s.loginPage__formLabel} htmlFor='captcha'>
                Captcha
              </label>
              <div className={s.loginPage__formInputBox}>
                <Field
                  className={s.loginPage__formInput}
                  name='captcha'
                  id='captcha'
                  type='text'
                />
              </div>
              <ErrorMessage name='captcha' component={Error} />
            </div>
          ) : null}

          <p className={s.serverError}>{props.status}</p>
          <button className={s.loginPage__formBtn} type='submit'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
