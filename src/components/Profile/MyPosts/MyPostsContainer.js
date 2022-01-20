import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
