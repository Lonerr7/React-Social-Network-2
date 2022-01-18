import { NavLink } from 'react-router-dom';
import s from './Friend.module.scss';

const Friend = ({ id, name, avatar }) => {
  return (
    <div className={s.friend}>
      <NavLink to={`/messages/${id}`}>
        <div>
          <img className={s.avatar} src={avatar} alt="avatar" />
        </div>
        <p>{name}</p>
      </NavLink>
    </div>
  );
};

export default Friend;
