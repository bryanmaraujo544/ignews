/* eslint-disable react-hooks/rules-of-hooks */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.scss';
import { useAllPrismicDocumentsByType as getAllPrismicDocumentsByType } from '@prismicio/react';
import { prismic } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import { createClient } from '../../../prismicio';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Props) {
  console.log({ posts });
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(({ slug, excerpt, title, updatedAt }) => (
            <a href="" key={slug}>
              <time>{updatedAt}</time>
              <strong>{title}</strong>
              <p>{excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({
    previewData,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  const response = await client.getAllByType('post');

  const posts = response.map((post) => {
    const content = post?.data?.Content ?? post?.data?.content;
    return {
      slug: post.uid,
      title: post?.data?.Title ?? post?.data?.title,
      excerpt:
        content.find((content) => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
