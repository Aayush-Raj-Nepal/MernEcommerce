import axios from 'axios'
import {store} from '../store/index'

export default function setup(){
    axios.interceptors.request.use(async config => {
        
let apiUrl = process.env.NODE_ENV === "production" ? "/" : "http://127.0.0.1:4000/api"
        const token = store.getState().auth.token.token
        config.baseURL = apiUrl
        if(token){
            config.headers.Authorization = token
        }
        return config
    },function(err){
        console.log(err)
        return Promise.reject(err)
    })
}