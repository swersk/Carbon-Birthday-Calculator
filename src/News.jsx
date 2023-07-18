import React, { useEffect } from 'react';
import { contentTag } from './routes.js';

const News = () => {

  useEffect(() => {
    contentTag('climate')
    .then((data) => {
      console.log('data from API', data)
    })
    .catch((error) => console.error('Error retrieving tags in News component', error))
  }, [])

  return (
    <p>News </p>
  )
}

export default News;