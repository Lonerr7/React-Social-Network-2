import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      MyPosts
      <div>
        <textarea></textarea>
        <div>
          <button>New post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
