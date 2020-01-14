const axios =require("axios");

export function get(fn){
    axios.get("http://www.dell-lee.com/react/api/demo.json").then((response)=>{
        fn(response.data);
    });
}

export function get2(){
    return axios.get("http://www.dell-lee.com/react/api/demo.json");
}

export function get3(){
    return axios.get("http://www.dell-lee.com/react/api/demo1.json");
}