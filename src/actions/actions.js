import axios from 'axios';
const URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyD5ftlBywxcmDbG6KdjEirWrIirDIFcvoQ';

export const loadVideoList = (term) => {
  const params = {
    maxResults: 10,
    part: 'snippet',
    q: term,
    type: 'video',
    key: API_KEY
  }
  
  const request = axios.get(URL, {params: params});
 
  return {
    type: 'GET_VIDEO_LIST',
    payload: request
  }
}