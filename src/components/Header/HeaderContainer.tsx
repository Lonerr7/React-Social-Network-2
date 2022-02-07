import React from 'react';
import { connect } from 'react-redux';
import { logOutTC } from '../../redux/authReducer';
import { RootStateType } from '../../redux/redux-store';
import Header from './Header';

type MapStatePropsType = {
  login: string | null;
  isAuth: boolean;
  id: number | null;
};
type MapDispatchPropsType = {
  logOut: () => void;
};
type OwnPropsType = {};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const HeaderContainer: React.FC<PropsType> = (props) => {
  const onLogOut = () => {
    props.logOut();
  };

  return <Header {...props} onLogOut={onLogOut} />;
};

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  id: state.auth.id,
});

const dispatchToProps = {
  logOut: logOutTC,
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  RootStateType
>(
  mapStateToProps,
  dispatchToProps
)(HeaderContainer);
