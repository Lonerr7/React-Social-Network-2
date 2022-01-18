import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = ({ posts }) => {
  const postElements = posts.map((p) => (
    <Post postMessage={p.postMessage} id={p.id} key={p.id} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    alert(newPostElement.current.value);
  };

  return (
    <div className={s.myPosts}>
      MyPosts
      <div className={s.newPostBox}>
        <textarea ref={newPostElement}></textarea>
        <div>
          <button onClick={onAddPost}>New post</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
