import axios from "axios"

const instance = axios.create({
    baseURL: 'https://book-store-29dca.firebaseio.com/'
})

export default instance