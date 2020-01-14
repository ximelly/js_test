import {runCallBack,creatObject,getData} from "./mock"
const axios =require("axios");

//mock核心用法
// 1、捕获函数的调用和返回结果，以及this和调用顺序
// 2、自由的设置返回结果
// 3、改变函数的内部实现

test("测试runCallBack",()=>{
  let fn=jest.fn();//mock函数，捕获函数的调用
  runCallBack(fn);
  runCallBack(fn);
  runCallBack(fn);

  //是否执行了回调函数
  expect(fn).toBeCalled();

  //回调被调用了几次
  expect(fn.mock.calls.length).toBe(3);
})

// fn.mock
//{ 
//  调用队列（[]里面是参数）：calls: [ [], [], [] ],
//         instances: [ undefined, undefined, undefined ],
//  调用顺序：        invocationCallOrder: [ 4, 5, 6 ],
//   回调函数的返回值：  
//  results:
//    [ { type: 'return', value: 'ximelly' },
//      { type: 'return', value: '123' },
//      { type: 'return', value: '123' } ] 
// }

test("测试runCallBack",()=>{
  let fn=jest.fn(()=>{
    return "123"
  });
  //fn.mockReturnValue("dusan");//模拟value
  fn.mockReturnValueOnce("ximelly");//模拟返回一次value
  runCallBack(fn);
  runCallBack(fn);
  runCallBack(fn);

  //是否执行了回调函数
  expect(fn).toBeCalled();
  console.log(fn.mock);
})

// { calls: [ [] ],
//  this指向： instances: [ mockConstructor {} ],
//   invocationCallOrder: [ 1 ],
//   results: [ { type: 'return', value: undefined } ] 
//}
test("测试creatObject",()=>{
  let fn=jest.fn();//mock函数，捕获函数的调用
  creatObject(fn);
  console.log(fn.mock);
})

//同步模拟数据
jest.mock("axios");//声明不发送ajax请求 用jest模拟真实的axios请求
test("测试getData",async()=>{
  // axios.get.mockResolvedValueOnce({data:12});//模拟返回一次数据
  // axios.get.mockResolvedValueOnce({data:13});//模拟返回一次数据
  axios.get.mockResolvedValue({data:12});//模拟返回的数据
  await getData().then(data=>{
    expect(data).toBe(12);
  });
})