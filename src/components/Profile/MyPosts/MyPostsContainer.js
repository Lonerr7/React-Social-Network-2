import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const dispatchToProps = {
  updateNewPostText: updateNewPostTextAC,
  addPost: addPostAC,
};

const MyPostsContainer = connect(mapStateToProps, dispatchToProps)(MyPosts);

export default MyPostsContainer;
