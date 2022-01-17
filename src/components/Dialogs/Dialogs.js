import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.scss';
import Message from './Message/Message';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <DialogItem name="Vanya" id={1} />
        <DialogItem name="Ilya" id={1} />
        <DialogItem name="Vadim" id={1} />
      </div>
      <div className={s.dialogs__messages}>
        <Message message="Hi" />
        <Message message="Hello" />
        <Message message="What is up" />
      </div>
    </div>
  );
};

export default Dialogs;
