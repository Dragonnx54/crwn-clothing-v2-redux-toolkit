import styles from './button.module.scss';

export const BUTTON_TYPE_CLASSES = {
  base: 'baseButton',
  google: 'googleSignInButton',
  inverted: 'invertedButton',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return <button className={`${styles[BUTTON_TYPE_CLASSES.base]} ${buttonType ? styles[buttonType] : ''}`} {...otherProps}>{children}</button>;
};

export default Button;
