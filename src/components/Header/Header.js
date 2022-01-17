import s from './Header.module.scss';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="logo" />
    </header>
  )
}

export default Header
