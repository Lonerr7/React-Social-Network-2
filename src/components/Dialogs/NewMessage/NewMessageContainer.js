import {
  addMessageAC,
  updateNewMessageTextAC,
} from '../../../redux/dialogsReducer';
import NewMessage from './NewMessage';

const NewMessageContainer = ({ store }) => {
  const dialogsPage = store.getState().dialogsPage;

  const updateNewMessageText = (newText) => {
    store.dispatch(updateNewMessageTextAC(newText));
  };

  const sendMessage = () => {
    store.dispatch(addMessageAC());
  };

  return (
    <NewMessage
      updateNewMessageText={updateNewMessageText}
      sendMessage={sendMessage}
      newMessageText={dialogsPage.newMessageText}
    />
  );
};

export default NewMessageContainer;
