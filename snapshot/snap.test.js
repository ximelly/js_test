import {generateConfig} from "./snap"

//不使用快照
test("测试配置文件",()=>{
  expect(generateConfig()).toEqual({
    server:"http://localhost",
    port:"8080",
    name:"ximelly",
    age:29
  });
});

//使用快照
test("测试配置文件",()=>{
  expect(generateConfig()).toMatchSnapshot();
});