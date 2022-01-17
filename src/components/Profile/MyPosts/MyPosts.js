import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      MyPosts
      <div className={s.newPostBox}>
        <textarea></textarea>
        <div>
          <button>New post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are u" likesCount={10} />
        <Post message={`It's my first post`} likesCount={15} />
      </div>
    </div>
  );
};

export default MyPosts;
