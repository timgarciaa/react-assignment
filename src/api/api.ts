import axios from 'axios'

export async function getUsers(): Promise<any> {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users');
  return result.data;
}
