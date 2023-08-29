'use client';
import { Metadata } from 'next';
import { getAllNews, getNewsById } from '@/services/getNews';
import { Props, News, singleNews } from '@/types/types';
import styles from '@/styles/News.module.css';
import Link from 'next/link';
import hideMenuAfterClick from '@/handleClick/hideMenuAfterClick';

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

  const result: News = news.news;

  return result.map((news) => ({
    slug: news.id.toString(),
  }));
}

function newsContent(title: string, body: string, date: string) {
  return (
    <>
      <div className={styles.news}>
        <div className={styles.news__date}>{date}</div>
        <div className={styles.news__title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.news__body}>{body}</div>

        <div className={styles.news__comeback}>
          <Link href="/news" onClick={hideMenuAfterClick}>
            Go to news list
          </Link>
        </div>
      </div>
    </>
  );
}

export default async function News({ params: { id } }: Props) {
  const news: singleNews = await getNewsById(id);

  try {
    if (!news) {
      throw new Error('NOT FOUND');
    }
  } catch (e) {
    console.warn(e);
    return (
      <>
        <div className={styles.news}>
          <div className={styles.news__error}>Not found news!</div>

          <div className={styles.news__comeback}>
            <Link href="/news" onClick={hideMenuAfterClick}>
              Go to news list
            </Link>
          </div>
        </div>
      </>
    );
  }
  const { title, body, date } = news;

  return newsContent(title, body, date);
}
