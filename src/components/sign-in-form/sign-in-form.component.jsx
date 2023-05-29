import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import styles from './sign-in-form.module.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={`${styles.container}`}>
      <h2>I already have  an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(event) => handleSubmit(event)}>
          <FormInput label='Email' type='email' name='email' required onChange={handleChange} value={email}/>
          <FormInput label='Password' type='password' name='password' required onChange={handleChange} value={password} />
          <div className={`${styles.buttonsContainer}`}>
              <Button type={'submit'}>
                  Sign in
              </Button>
              <Button type='button' buttonType={`${BUTTON_TYPE_CLASSES.google}`} onClick={signInWithGoogle}>
                  Google Sign in
              </Button>
          </div>
      </form>
    </div>
  );
};

export default SignInForm;
