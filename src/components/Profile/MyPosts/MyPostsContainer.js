import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (newText) => {
    dispatch(updateNewPostTextAC(newText));
  },

  addPost: () => {
    dispatch(addPostAC());
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
