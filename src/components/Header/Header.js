import s from './Header.module.scss';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className={s.header}>
      <a href="#">
        <img className={s.logo} src={logo} alt="logo" />
      </a>
    </header>
  );
};

export default Header;
