import { request } from "./request";

export const sendData = (url, data) => {
  return request.post(url, data);
};

export const getUser = (url)=>{
  return request.get(url);
}