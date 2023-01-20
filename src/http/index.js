import axios from 'axios'

const instance  = axios.create({
    baseURL: 'https://itunes.apple.com',
    headers: {
        'Content-type' : 'application/x-www-form-urlencoded'
    }
})

export default instance