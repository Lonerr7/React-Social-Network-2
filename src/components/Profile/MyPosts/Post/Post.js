import s from './Post.module.scss';

const Post = ({postMessage, likesCount}) => {
  return (
    <div className={s.post}>
      <img
        className={s.avatar}
        src="https://innostudio.de/fileuploader/images/default-avatar.png"
        alt="avatar"
      />
      {postMessage}
      <p>Likes count: {likesCount}</p>
      <p>like</p>
    </div>
  );
};

export default Post;
