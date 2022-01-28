import { connect } from 'react-redux';
import { logOutTC } from '../../redux/authReducer';
import Header from './Header';

const HeaderContainer = (props) => {
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
  logOut: logOutTC,
};

export default connect(mapStateToProps, dispatchToProps)(HeaderContainer);
