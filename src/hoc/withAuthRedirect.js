import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to={`/login`} />;
    return <Component {...props} />;
  };

  const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
  });

  return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
