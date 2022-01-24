import preloader from '../../../images/preloader.gif';
import s from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div>
      <img className={s.preloader} src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
