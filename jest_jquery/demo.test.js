import {addDivToBody} from "./demo"
import $ from "jquery"
test("测试addDivToBody",()=>{
  addDivToBody();
  addDivToBody();
  expect($("body").find("div").length).toBe(2);
})