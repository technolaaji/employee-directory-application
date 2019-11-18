import axios from 'axios';
import { getToken } from './authentication';

const instace = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
    },
});

export default instace;
