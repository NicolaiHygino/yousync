import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_KEY;

const objectToURLParam = (obj) => Object.keys(obj)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
  .join('&');

export const youtubeSearch = async (term) => {
  const params = objectToURLParam({
    part: 'snippet',
    q: term,
    key: KEY,
  })
  const url = `https://www.googleapis.com/youtube/v3/search?${params}`;
  return await axios.get(url);
};
