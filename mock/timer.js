import { runCallBack } from "./mock";

export const timer=(callBack)=>{
  setTimeout(()=>{
    callBack();
    setTimeout(()=>{
      callBack();
    },3000);
  },3000);
}