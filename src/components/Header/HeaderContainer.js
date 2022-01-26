import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthUserDataTC } from '../../redux/authReducer';
import Header from './Header';

const HeaderContainer = (props) => {
  useEffect(() => {
    props.getSetAuthUserData();
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

const dispatchToProps = {
  getSetAuthUserData: getAuthUserDataTC,
};

export default connect(mapStateToProps, dispatchToProps)(HeaderContainer);
