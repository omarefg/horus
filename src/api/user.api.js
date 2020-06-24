import { API_URL } from './config';

export function getUsers() {
  return fetch(API_URL)
    .then(res => res.json())
    .then(res => res)
    .catch(error => {
      throw error;
    });
}
