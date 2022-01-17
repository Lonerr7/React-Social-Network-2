import s from './Post.module.scss';

const Post = () => {
  return (
    <div className={s.post}>
      <img
        className={s.avatar}
        src="https://innostudio.de/fileuploader/images/default-avatar.png"
        alt="avatar"
      />
      post
      <p>like</p>
    </div>
  );
};

export default Post;
