const axios =require("axios");

export const runCallBack=function(callBack){
  callBack();
}

export const creatObject=function(classItem){
  new classItem();
}

export const getData=function(){
  return axios.get("http://www.dell-lee.com/react/api/demo.json").then(res=>{
    return res.data;
  });
}