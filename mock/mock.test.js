import {runCallBack,creatObject} from "./mock"

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
  });//mock函数，捕获函数的调用
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
test.only("测试creatObject",()=>{
  let fn=jest.fn();//mock函数，捕获函数的调用
  creatObject(fn);
  console.log(fn.mock);
})