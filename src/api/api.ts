import axios from 'axios'
import Users from '@/types/user.type'

export async function getUsers(): Promise<Users[]> {
  const result = await axios.get('https://jsonplaceholder.typicode.com/users');
  return result.data;
}
