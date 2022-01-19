import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = ({ posts, dispatch, newPostText }) => {
  const postElements = posts.map((p) => (
    <Post postMessage={p.postMessage} id={p.id} key={p.id} />
  ));

  const onPostChange = (e) => {
    dispatch(updateNewPostTextAC(e.target.value));
  };

  const onAddPost = (e) => {
    dispatch(addPostAC());
  };

  return (
    <div className={s.myPosts}>
      MyPosts
      <div className={s.newPostBox}>
        <textarea onChange={onPostChange} value={newPostText}></textarea>
        <div>
          <button onClick={onAddPost}>New post</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
