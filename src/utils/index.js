import { USER } from "../const";

export const  ROLE =JSON.parse(localStorage.getItem(USER)).role;
export const USER_ID = JSON.parse(localStorage.getItem(USER))._id;
