import {timer} from "./timer"
jest.useFakeTimers();
test("测试timer",()=>{
  const fn=jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000);//时间跨进n毫秒
  //jest.runOnlyPendingTimers();//只处理当前出去队列中的定时器
  //jest.runAllTimers();//让所有定时器立即执行
  expect(fn).toHaveBeenCalledTimes(1);
})