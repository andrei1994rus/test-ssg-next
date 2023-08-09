import { getAllPosts } from '@/services/getPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog page | Next',
  description: 'Blog page with all posts',
};

export default async function Blog() {
  const posts = await getAllPosts().then((res: any) => res.json());

  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
