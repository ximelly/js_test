jest.mock("./demo");//使用__mocks__目录下的demo.js文件替代demo.js
//jest.unmock("./demo");//取消mock
import {fetchData} from "./demo"
const {getNumber} =jest.requireActual("./demo");//引用真是的demo文件

test("测试fetchData",async()=>{
  fetchData().then(data=>{
    expect(data.data).toBe(12);
  });
});

test("测试getNumber",async()=>{
  expect(getNumber()).toBe(123);
});