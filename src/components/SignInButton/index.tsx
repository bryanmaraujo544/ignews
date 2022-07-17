import { signIn, signOut, useSession } from 'next-auth/react';
import { ButtonHTMLAttributes } from 'react';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

interface Props extends ButtonHTMLAttributes<any> {}

export const SignInButton = ({ ...rest }: Props) => {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
      {...rest}
    >
      <FaGithub color="#04d361" />
      {session?.user?.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
};
