import { Metadata } from 'next';
import { getAllPosts, getPostById } from '@/services/getPosts';
import { Posts, Post, Props } from '@/types/types';

export const metadata: Metadata = {
  title: 'Post page | Next',
  description: 'Post page',
};

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

export default async function Post({ params: { id } }: Props) {
  const reqPost = await getPostById(id);
  const post: Post | null = await reqPost?.json();

  try {
    if (!post) {
      throw new Error('NOT FOUND');
    }
  } catch (e) {
    console.warn(e);
    return <div className="div_error">Not found posts!</div>;
  }
  const { title, body } = post;

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
}
