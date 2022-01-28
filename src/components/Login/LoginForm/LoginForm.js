import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import s from '../Login.module.scss';
import Error from './TextError/TextError';

const LoginForm = (props) => {
  const [btnName, setBtnName] = useState('Show');
  const {inputType, setInputType} = useState(false);

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = yup.object({
    email: yup.string().email(`Invalid email format`).required(`Required`),
    password: yup.string().required(`Required`),
  });

  const onSubmit = (values, { setSubmitting, setStatus }) => {
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
            <label className={s.loginPage__formLabel} htmlFor="email">
              Email
            </label>
            <Field
              className={s.loginPage__formInput}
              name="email"
              id="email"
              type="text"
            />
            <ErrorMessage name="email" component={Error} />
          </div>
          <div className={s.loginPage__formControl}>
            <label className={s.loginPage__formLabel} htmlFor="password">
              Password
            </label>
            <div className={s.loginPage__formInputBox}>
              <Field
                className={s.loginPage__formInput}
                name="password"
                id="password"
                type={'password'}
              />
              <button className={s.loginPage__formInputBtn}>{btnName}</button>
            </div>
            <ErrorMessage name="password" component={Error} />
          </div>

          <div className={s.loginPage__formControl_checkbox}>
            <label className={s.loginPage__formLabel} htmlFor="rememberMe">
              Remember me
            </label>
            <Field name="rememberMe" id="checkbox" type="checkbox" />
          </div>
          <p className={s.serverError}>{props.status}</p>
          <button className={s.loginPage__formBtn} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
