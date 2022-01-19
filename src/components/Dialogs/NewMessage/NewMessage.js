import { addMessageAC, updateNewMessageTextAC } from '../../../redux/dialogsReducer';
import s from './NewMessage.module.scss';

const NewMessage = ({ newMessageText, dispatch }) => {
  const onMessageChange = (e) => {
    dispatch(updateNewMessageTextAC(e.target.value));
  };

  const onAddMessage = () => {
    // We don't need to pass newMessageText if we tweak something in dispatch for addMessage
    dispatch(addMessageAC());
  };

  return ( 
    <div className={s.NewMessage}>
      <div>
        <textarea
          className={s.textarea}
          value={newMessageText}
          onChange={onMessageChange}
        ></textarea>
        <button onClick={onAddMessage}>Add Message</button>
      </div>
    </div>
  );
};

export default NewMessage;
