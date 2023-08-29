import { getAllNews } from '@/services/getNews';
import Link from 'next/link';
import { Metadata } from 'next';
import { News, singleNews } from '@/types/types';
import styles from '@/styles/News.module.css';

export const metadata: Metadata = {
  title: 'News page | Next',
  description: 'News page with all news',
};

export default async function NewsPage() {
  const news = await getAllNews();
  const result: News = news.news;

  return (
    <>
      <div className={styles.news}>
        <h1>News page</h1>
        <ul className={styles.news__ul}>
          {result.map((news: singleNews) => (
            <li key={news.id}>
              <Link href={`/news/${news.id}`}>{news.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
