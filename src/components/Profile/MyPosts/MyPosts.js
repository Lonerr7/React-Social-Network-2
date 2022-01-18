import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = ({ posts }) => {
  const postElements = posts.map((p) => (
    <Post postMessage={p.postMessage} id={p.id} key={p.id} />
  ));

  return (
    <div className={s.myPosts}>
      MyPosts
      <div className={s.newPostBox}>
        <textarea></textarea>
        <div>
          <button>New post</button>
        </div>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
