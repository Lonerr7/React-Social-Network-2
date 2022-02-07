import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logInTC } from '../../redux/authReducer';
import { RootStateType } from '../../redux/redux-store';
import s from './Login.module.scss';
import LoginForm from './LoginForm/LoginForm';

type MapStatePropsType = {
  isAuth: boolean;
  captchaURL: string;
};

export type LogInType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};
type MapDispatchPropsType = {
  logIn: (loginInfo: LogInType, setStatus: any) => void;
};
type OwnPropsType = {};

export type LoginPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const Login: React.FC<LoginPropsType> = (props) => {
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

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaURL: state.auth.captchaURL,
});

const dispatchToProps = {
  logIn: logInTC,
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  RootStateType
>(
  mapStateToProps,
  dispatchToProps
)(Login);
