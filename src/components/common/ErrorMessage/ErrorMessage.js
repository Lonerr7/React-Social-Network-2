import s from './ErrorMessage.module.scss'

const ErrorMessage = (props) => {
  return <p className={s.errorMessage}>{props.children}</p>;
};

export default ErrorMessage;
