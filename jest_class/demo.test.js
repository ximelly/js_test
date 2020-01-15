jest.mock("./util")  
//jest.mock发现demo是一个类，会自动把类的构造函数和方法变成jest.fn();
//const Util=jest.fn();
//Util.a=jest.fn();
//Util.b=jest.fn;
import {Util} from "./util"
import {demoFun} from "./demo"

test("测试demoFun",async()=>{
  demoFun(1,2);
  expect(Util).toHaveBeenCalled();
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();
});