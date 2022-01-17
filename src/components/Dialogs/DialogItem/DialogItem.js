import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.scss';

const DialogItem = ({ name, id }) => {
  const path = `/messages/${id}`;

  return (
    <div className={s.dialogs__item}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
