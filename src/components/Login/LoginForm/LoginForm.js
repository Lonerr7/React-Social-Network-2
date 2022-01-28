import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import s from '../Login.module.scss';

const LoginForm = (props) => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = yup.object({
    email: yup.string().required(`Required`),
    password: yup.string().required(`Required`),
  });

  const onSubmit = (values) => {
    props.logIn(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.loginPage__form}>
        <div className={s.loginPage__formControl}>
          <label htmlFor="email">Email</label>
          <Field
            className={s.loginPage__formInput}
            name="email"
            id="email"
            type="text"
          />
          <ErrorMessage name="email" />
        </div>
        <div className={s.loginPage__formControl}>
          <label htmlFor="password">Password</label>
          <Field
            className={s.loginPage__formInput}
            name="password"
            id="password"
            type="password"
          />
          <ErrorMessage name="password" />
        </div>

        <div className={s.loginPage__formControl_checkbox}>
          <label htmlFor="rememberMe">Remember me</label>
          <Field name="rememberMe" id="checkbox" type="checkbox" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
