import { Metadata } from 'next';
import { getAllPosts, getPostById } from '@/services/getPosts';
import { Props } from '@/types/types';

export const metadata: Metadata = {
  title: 'Post page | Next',
  description: 'Post page',
};

export async function generateStaticParams() {
  let posts: any[] = [];
  try {
    posts = await getAllPosts().then((res: any) => res.json());
  } catch (e) {
    console.log(e);
  }

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export default async function Post({ params: { id } }: Props) {
  const reqPost = await getPostById(id);
  const post = await reqPost.json();

  try {
    if (!post.title && !post.body) {
      throw new Error('NOT FOUND');
    }
  } catch (e) {
    console.warn(e);
    return <div className='div_error'>Not found news!</div>;
  }
  const { title, body } = post;

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
}
