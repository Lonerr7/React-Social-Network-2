import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logInTC } from '../../redux/authReducer';
import s from './Login.module.scss';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
  if (props.isAuth) return <Navigate to={`/profile`} />;

  return (
    <div className={s.loginPage}>
      <p className={s.loginTitle}>Login</p>
      <div className={s.loginPage__formBox}>
        <LoginForm {...props} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const dispatchToProps = {
  logIn: logInTC,
};

export default connect(mapStateToProps, dispatchToProps)(Login);
