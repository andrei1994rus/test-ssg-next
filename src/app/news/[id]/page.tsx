import { Metadata } from 'next';
import { getAllNews, getNewsById } from '@/services/getNews';
import { Props } from '@/types/types';

export const metadata: Metadata = {
  title: 'News page | Next',
  description: 'News page with one news',
};

export async function generateStaticParams() {
  let news: any;
  try {
    news = await getAllNews();
  } catch (e) {
    console.log(e);
  }

  console.log('news gen:', news.news);
  const result: any[] = news.news;

  return result.map((news) => ({
    slug: news.id.toString(),
  }));
}

export default async function News({ params: { id } }: Props) {
  const news = await getNewsById(id);

  try {
    if (!news.title && !news.body) {
      throw new Error('NOT FOUND');
    }
  } catch (e) {
    console.warn(e);
    return <div className="div_error">Not found news!</div>;
  }
  const { title, body } = news;

  return (
    <>
      <div className="div__news">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </>
  );
}
