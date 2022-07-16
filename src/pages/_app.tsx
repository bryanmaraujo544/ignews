import { Header } from '../components/Header';
import { AppProps } from 'next/app';
import '../styles/global.scss';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { PrismicProvider } from '@prismicio/react';
import { prismic } from '../services/prismic';
import Link from 'next/link';

import { linkResolver, repositoryName } from '../../prismicio';
import { PrismicPreview } from '@prismicio/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Header />
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
