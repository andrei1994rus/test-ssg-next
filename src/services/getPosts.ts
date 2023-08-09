export async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Unable to fetch posts');
  }

  return response;
}

export async function getPostById(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    throw new Error('Unable to fetch post');
  }

  return response;
}
