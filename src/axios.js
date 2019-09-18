import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://listofdebtors.firebaseio.com/'
});

export default instance;