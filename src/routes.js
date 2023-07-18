import axios from "axios";
const apiKey = process.env.REACT_APP_KEY;


export function contentTag(tag) {
  const params = {
    q: 'tag',
    'api-key': apiKey,
  };

  return axios.get('http://content.guardianapis.com/tags', { params })
  .then((response) => console.log(response.data))
  // .then((response) => response.data.response)
  .catch((error) => console.error('Error getting data via tags:', error))
}