import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import styles from './authentication.module.scss'

const Authentication = () => {
  return (
    <div className={`${styles.container}`}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
