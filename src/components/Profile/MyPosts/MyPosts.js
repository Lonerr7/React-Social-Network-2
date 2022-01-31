import React, { useState } from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = ({ addPost, profilePage }) => {
  const postElements = profilePage.posts.map((p) => (
    <Post postMessage={p.postMessage} id={p.id} key={p.id} />
  ));

  const [postText, setpostText] = useState('');

  const onPostChange = (e) => {
    // updateNewPostText(e.target.value);
    setpostText(e.target.value);
  };

  const onAddPost = () => {
    addPost(postText);
    setpostText('');
  };

  return (
    <div className={s.myPosts}>
      MyPosts
      <div className={s.newPostBox}>
        <textarea
          className={s.postsTextarea}
          onChange={onPostChange}
          value={postText}
        ></textarea>
        <div>
          <button className={s.addPostBtn} onClick={onAddPost}>
            New post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
