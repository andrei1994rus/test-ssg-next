export async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  try {
    if (!response.ok) {
      throw new Error('Unable to fetch posts');
    }
  } catch (e) {
    return null;
  }

  /*if (!response.ok) {
    throw new Error('Unable to fetch posts');
  }*/

  return response;
}

export async function getPostById(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  try {
    if (!response.ok) {
      throw new Error('Unable to fetch post');
    }
  } catch (e) {
    return null;
  }

  return response;
}
