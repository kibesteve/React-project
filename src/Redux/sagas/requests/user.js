import axios from 'axios';

export function reqGetUser(){
    return axios.request({
        method: 'get',
        url:"http://localhost:8080/user"
    })
} 