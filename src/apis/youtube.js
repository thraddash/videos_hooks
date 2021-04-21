import axios from 'axios';
require('dotenv').config({ path: '../../../.env' });

const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_KEY;
// create youtube api key developers.google.com/youtube
// google youtube search v3

// create pre configure instance of axios with base URL and default param
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        type: 'video',
        key: YOUTUBE_KEY   
    }
});

// npm install --save axios