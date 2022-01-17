import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  const postData = [
    { id: 1, postMessage: 'Hi, how are u' },
    { id: 2, postMessage: "It's my first post" },
  ];

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
        <Post postMessage={postData[0].postMessage} likesCount={10} />
        <Post postMessage={postData[1].postMessage} likesCount={15} />
      </div>
    </div>
  );
};

export default MyPosts;
