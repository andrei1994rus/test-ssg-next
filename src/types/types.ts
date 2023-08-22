import IUrl from '@/interfaces/IUrl';
import INews from '@/interfaces/INews';
import IPost from '@/interfaces/IPost';

export type navigationData = IUrl[]; /*Array<IUrl>*/
export type Props = {
  params: {
    id: string;
  };
};
export type News = INews[]; /*Array<INews>*/
export type Posts = Array<IPost>; /*IPost[]*/
export type singleNews = INews;
export type Post = IPost;
