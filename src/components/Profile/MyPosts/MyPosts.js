import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = ({ posts, dispatch, newPostText }) => {
  const postElements = posts.map((p) => (
    <Post postMessage={p.postMessage} id={p.id} key={p.id} />
  ));

  const onPostChange = (e) => {
    dispatch({ type: 'UPDATE_NEW_POST_TEXT', newText: e.target.value });
    console.log(e.target.value);
  };

  const onAddPost = (e) => {
    dispatch({type: 'ADD_POST'});
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
