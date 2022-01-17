import s from './Dialogs.module.scss';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={s.dialogs__item}>Vanya:</div>
        <div className={s.dialogs__item}>Ilya:</div>
        <div className={s.dialogs__item}>Vadim:</div>
      </div>
      <div className={s.dialogs__messages}>
        <div className={s.dialogs__message}>Hi</div>
        <div className={s.dialogs__message}>Hello</div>
        <div className={s.dialogs__message}>What is up</div>
      </div>
    </div>
  );
};

export default Dialogs;
