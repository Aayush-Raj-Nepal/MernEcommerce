import { API } from "./backend";
import axios from 'axios'


export const getLatestProducts=(data)=>{
  return axios.get(API+"product/latest").then(resp => {
    console.log(resp)
     return resp.data
     })
     .catch(err=>{
       console.log(" request failed",err)
       return err.error
     })
 }
