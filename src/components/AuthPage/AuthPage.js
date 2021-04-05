import { useDispatch } from 'react-redux';
import authOperations from '../../redux/authorization/authorization-operations';

import styles from './AuthPage.module.css';
import googleLogo from './images/Google-logo.svg';
import AuthForm from '../';
const AuthPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = async ({ email, password }) => {
    await dispatch(authOperations.logIn({ email, password }));
  };
  return (
    <div className={styles.AuthPage}>
      <div className={styles.description}>
        <h1>Pro Test</h1>
        <p>
          [ We will help you find weak points in knowledge so that you can
          strengthen it. We will show you what is relevant to know for a QA
          Engineer and will try to make the learning process more diverse_ ]
        </p>
      </div>
      <div className={styles.login_register}>
        <p>You can use your Google Account to authorize:</p>
        <button>
          <img src={googleLogo} alt="Google logo" />
          Google
        </button>
        <p>Or login to our app using e-mail and password:</p>
        <AuthForm login="true" onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
export default AuthPage;
