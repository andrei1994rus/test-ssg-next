import fsPromises from 'fs/promises';
import path from 'path';

export async function getAllNews() {
  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  console.log(objectData);

  return objectData;
}

export async function getNewsById(id: string) {
  const filePath = path.join(process.cwd(), 'news.json');
  const jsonData: any = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const result: any[] = objectData.news;
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
