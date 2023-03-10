import axios from 'axios';

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3';

export async function mainVideo(token, keyword, category) {
    if (keyword) {
        return axios.get(`${YOUTUBE_URL}/search`, {
            params: {
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                pageToken: token && token,
                q: keyword,
            },
        });
    } else {
        return axios.get(`${YOUTUBE_URL}/videos`, {
            params: {
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                part: 'snippet,statistics',
                maxResults: 25,
                chart: 'mostPopular',
                regionCode: 'kr',
                pageToken: token && token,
                videoCategoryId: category,
            },
        });
    }

    //return axios.get('/videos/related.json');
}

export async function videoCategory() {
    return axios.get(`${YOUTUBE_URL}/videoCategories`, {
        params: {
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            part: 'snippet',
            regionCode: 'kr',
        },
    });
}

export async function relatedVideo(id) {
    return axios
        .get(`${YOUTUBE_URL}/search`, {
            params: {
                key: process.env.REACT_APP_YOUTUBE_API_KEY,

                part: 'snippet',
                maxResults: 25,
                type: 'video',
                relatedToVideoId: id,
            },
        })
        .then((res) =>
            res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
        );
}

export async function channelImageURL(id) {
    return axios
        .get(`${YOUTUBE_URL}/channels`, {
            params: {
                key: process.env.REACT_APP_YOUTUBE_API_KEY,
                part: 'snippet',
                id,
            },
        })
        .then((res) => res.data.items[0].snippet.thumbnails.default.url);
}

export async function fakeMainVideo(keyword) {
    if (keyword) {
        return axios.get('/videos/search.json');
    } else {
        return axios.get('/videos/related.json');
    }
}
