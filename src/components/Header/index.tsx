import { useState } from 'react';
import { useRouter } from 'next/router';
import { CgMenuRight, CgClose } from 'react-icons/cg';

import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  function handleOpenSideMenu() {
    setIsSideMenuOpen(true);
  }

  function handleCloseSideMenu() {
    setIsSideMenuOpen(false);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav className={isSideMenuOpen ? styles.opened : styles.closed}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleCloseSideMenu}
          >
            <CgClose />
          </button>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
          <SignInButton />
        </nav>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={handleOpenSideMenu}
        >
          <CgMenuRight />
        </button>
      </div>
    </header>
  );
};
