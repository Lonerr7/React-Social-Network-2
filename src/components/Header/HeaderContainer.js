import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthUserDataTC, logOutTC } from '../../redux/authReducer';
import Header from './Header';

const HeaderContainer = (props) => {
  useEffect(() => {
    props.getSetAuthUserData();
  }, []);

  const onLogOut = () => {
    props.logOut();
  }

  return <Header {...props} onLogOut={onLogOut} />;
};

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

const dispatchToProps = {
  getSetAuthUserData: getAuthUserDataTC,
  logOut: logOutTC,
};

export default connect(mapStateToProps, dispatchToProps)(HeaderContainer);
