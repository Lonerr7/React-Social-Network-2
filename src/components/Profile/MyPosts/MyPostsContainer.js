import { connect } from 'react-redux';
import { profileActions } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const dispatchToProps = {
  updateNewPostText: profileActions.updateNewPostTextAC,
  addPost: profileActions.addPostAC,
};

const MyPostsContainer = connect(mapStateToProps, dispatchToProps)(MyPosts);

export default MyPostsContainer;
