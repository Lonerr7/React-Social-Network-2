import { connect } from 'react-redux';
import { updateProfileInfoTC } from '../../../../redux/profileReducer';
import ProfileEditForm from './ProfileEditForm';

const mapStateToProps = (state) => ({});

const dispatchToProps = {
  updateProfileInfo: updateProfileInfoTC,
};

const ProfileEditFormContainer = (props) => {
  return <ProfileEditForm {...props} />;
};

export default connect(mapStateToProps, dispatchToProps)(ProfileEditFormContainer);
