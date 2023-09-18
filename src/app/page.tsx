'use client';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import hideMenuAfterClick from '@/handleClick/hideMenuAfterClick';
import dynamic from 'next/dynamic';
import { Roboto } from 'next/font/google';

const NavigationBar = dynamic(() => import('@/components/navigationBar'));

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500'],
});

export default function Home() {
  return (
    <>
      <div className={roboto.className}>
        <NavigationBar />
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
      </div>
    </>
  );
}
