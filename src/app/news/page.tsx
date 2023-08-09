import { getAllNews } from '@/services/getNews';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News page | Next',
  description: 'News page with all news',
};

export default async function NewsPage() {
  const news = await getAllNews();
  const result: any[] = news.news;

  return (
    <>
      <h1>News page</h1>
      <ul>
        {result.map((news: any) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
