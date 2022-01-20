import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = ({ updateNewPostText, addPost, profilePage }) => {
  const postElements = profilePage.posts.map((p) => (
    <Post postMessage={p.postMessage} id={p.id} key={p.id} />
  ));

  const onPostChange = (e) => {
    updateNewPostText(e.target.value);
  };

  const onAddPost = (e) => {
    addPost();
  };

  return (
    <div className={s.myPosts}>
      MyPosts
      <div className={s.newPostBox}>
        <textarea onChange={onPostChange} value={profilePage.newPostText}></textarea>
        <div>
          <button onClick={onAddPost}>New post</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
