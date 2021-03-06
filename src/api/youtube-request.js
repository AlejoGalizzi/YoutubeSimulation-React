import axios from 'axios';
import KEY from './youtube';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 15,
    key: KEY
  }
})