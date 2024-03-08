import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '9c36ecae7cef445d983c62cde5a8f3f1'
    }
})