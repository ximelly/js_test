const axios =require("axios");
export const fetchData=()=>{
  return axios.get("/").then(res=>res.data);
}
export const getNumber=()=>{
  return 123;
}