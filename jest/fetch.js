const axios =require("axios");

export function get(fn){
    axios.get("http://www.dell-lee.com/react/api/demo.json").then((response)=>{
        fn(response.data);
    });
}