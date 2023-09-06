import news from '../news.json';

export async function getAllNews() {
  console.log(news);
  const objectData = news;

  return objectData;
}

export async function getNewsById(id: string) {
  const result: any[] = news.news;
  let object: any;

  console.log('result:', result);

  for (let obj of result) {
    console.log(obj.id);

    if (obj.id == id) {
      console.log('obj.id==id');
      object = obj;
      break;
    }
  }

  return object;
}
