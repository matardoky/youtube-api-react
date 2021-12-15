import axios from 'axios'


export default axios.create({
    baseURL:' https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: 'AIzaSyD--rPz3nnqB7Jc4alQF6nGJj4b1OXOklw',

    }

})