import { useEffect } from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { setUserDataAC } from '../../redux/authReducer';
import Header from './Header';

const HeaderContainer = (props) => {
  useEffect(() => {
    (async () => {
      try {
        const response = await authAPI.authMe();

        const { id, login, email } = response.data.data;
        if (response.data.resultCode === 0) props.setUserData(id, login, email);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <Header {...props} />;
};

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

const dispatchToProps = {
  setUserData: setUserDataAC,
};

export default connect(mapStateToProps, dispatchToProps)(HeaderContainer);
