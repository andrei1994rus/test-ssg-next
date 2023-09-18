import { getAllPosts } from '@/services/getPosts';
import Link from 'next/link';
import { Metadata } from 'next';
import { Post } from '@/types/types';
import styles from '@/styles/Blog.module.css';
import dynamic from 'next/dynamic';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500'],
});

const NavigationBar = dynamic(() => import('@/components/navigationBar'));

export const metadata: Metadata = {
  title: 'Blog page | Next',
  description: 'Blog page with all posts',
};

export default async function Blog() {
  const posts = await getAllPosts().then((res: any) => res.json());

  return (
    <>
      <div className={roboto.className}>
        <NavigationBar />
        <div className={styles.blog}>
          <h1>Blog page</h1>
          <ul className={styles.blog__ul}>
            {posts.map((post: Post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
