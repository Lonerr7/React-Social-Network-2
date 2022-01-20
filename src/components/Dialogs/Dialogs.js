import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = ({ store }) => {
  const dialogsPage = store.getState().dialogsPage;

  const dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  const messagesElements = dialogsPage.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.dialogs__messages}>{messagesElements}</div>
      <NewMessageContainer store={store} />
    </div>
  );
};

export default Dialogs;
