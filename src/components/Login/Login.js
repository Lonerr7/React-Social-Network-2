import { ErrorMessage, Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as yup from 'yup';
import { logInTC } from '../../redux/authReducer';
import s from './Login.module.scss';

const Login = (props) => {
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
    debugger;
    props.logIn(values);
  };

  if (props.isLoggedIn) return <Navigate to={`/profile`} />;

  return (
    <div className={s.loginPage}>
      <p className={s.loginTitle}>Login</p>
      <div className={s.loginPage__formBox}>
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const dispatchToProps = {
  logIn: logInTC,
};

export default connect(mapStateToProps, dispatchToProps)(Login);
