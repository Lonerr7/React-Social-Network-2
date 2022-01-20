import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = ({ store }) => {
  const profilePage = store.getState().profilePage;

  const updateNewPostText = (newText) => {
    store.dispatch(updateNewPostTextAC(newText));
  };

  const addPost = () => {
    store.dispatch(addPostAC());
  };

  return (
    <MyPosts
      updateNewPostText={updateNewPostText}
      addPost={addPost}
      profilePage={profilePage}
    />
  );
};

export default MyPostsContainer;
