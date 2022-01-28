import s from './NewMessage.module.scss';

const NewMessage = ({ newMessageText, updateNewMessageText, sendMessage }) => {
  const onMessageChange = (e) => {
    updateNewMessageText(e.target.value);
  };

  const onAddMessage = () => {
    sendMessage();
  };

  return (
    <div className={s.NewMessage}>
      <div>
        <textarea
          className={s.textarea}
          value={newMessageText}
          onChange={onMessageChange}
        ></textarea>
        <button className={s.newMessageBtn} onClick={onAddMessage}>Add Message</button>
      </div>
    </div>
  );
};

export default NewMessage;
