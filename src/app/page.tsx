'use client';
import { Metadata } from 'next';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import hideMenuAfterClick from '@/handleClick/hideMenuAfterClick';

export const metadata: Metadata = {
  title: 'Home page | Next',
  description: 'Home page',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <span>This app can:</span>
      <ul className={styles.main__ul}>
        <li>
          output list all news (
          <Link
            className={styles.main__link}
            href="/news"
            onClick={hideMenuAfterClick}
          >
            /news
          </Link>
          );
        </li>
        <li>
          output list all posts (
          <Link
            className={styles.main__link}
            href="/blog"
            onClick={hideMenuAfterClick}
          >
            /blog
          </Link>
          ).
        </li>
      </ul>
      <span className={styles.main__warning}>
        This app use async request and Static Site Generation.
      </span>
    </main>
  );
}
