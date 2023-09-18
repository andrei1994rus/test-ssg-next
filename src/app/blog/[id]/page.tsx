'use client';
import { getAllPosts, getPostById } from '@/services/getPosts';
import { Posts, Post, Props } from '@/types/types';
import styles from '@/styles/Post.module.css';
import Link from 'next/link';
import hideMenuAfterClick from '@/handleClick/hideMenuAfterClick';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500'],
});

export async function generateStaticParams() {
  let posts: Posts = [];
  try {
    posts = await getAllPosts().then((res: any) => res.json());
  } catch (e) {
    console.log(e);
  }

  return posts.map((post: Post) => ({
    slug: post.id.toString(),
  }));
}

function postContent(title: string, body: string) {
  return (
    <>
      <div className={roboto.className}>
        <div className={styles.post}>
          <div className={styles.post__title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.post__body}>{body}</div>

          <div className={styles.post__comeback}>
            <Link href="/blog" onClick={hideMenuAfterClick}>
              Go to blog page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default async function Post({ params: { id } }: Props) {
  const reqPost = await getPostById(id);
  const post: Post | null = await reqPost?.json();

  try {
    if (!post) {
      throw new Error('NOT FOUND');
    }
  } catch (e) {
    console.warn(e);
    return (
      <>
        <div className={roboto.className}>
          <div className={styles.post}>
            <div className={styles.post__error}>Not found posts!</div>

            <div className={styles.post__comeback}>
              <Link href="/blog" onClick={hideMenuAfterClick}>
                Go to blog page
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  const { title, body } = post;

  return postContent(title, body);
}
