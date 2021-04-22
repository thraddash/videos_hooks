import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// App.js calls useVideos, provide list of input from default term
// return list of videos and a function that can be use to search for videos
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, []); // 2nd argv empty array, run inside function one time

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search];
    //return { videos, search };
};

export default useVideos;