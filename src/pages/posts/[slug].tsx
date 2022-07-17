import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { createClient } from '../../../prismicio';
import styles from './post.module.scss';
interface Props {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: Props) {
  console.log({ post });

  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
  previewData,
}) => {
  const session = await getSession({ req });
  const { slug } = params;
  console.log(slug);

  // if (!session) {}

  const prismic = createClient({
    previewData,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  const response = await prismic.getByUID('post', String(slug));
  console.log({ response });

  const post = {
    slug,
    title: response?.data?.Title ?? response?.data?.title,
    content: RichText.asHtml(
      response?.data?.Content ?? response?.data?.content
    ),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  };

  return {
    props: {
      post,
    },
  };
};
