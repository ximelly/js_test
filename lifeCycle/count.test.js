import Counter from "./count"

let count=null;
beforeAll(()=>{
  console.log("beforeAll");
})
beforeEach(()=>{
  console.log("beforeEach");
  count=new Counter();
})
afterEach(()=>{
  console.log("afterEach");
})
afterAll(()=>{
  console.log("afterAll");
})

describe("测试add相关代码",()=>{
  test("测试add",()=>{
    console.log("测试add");
    count.add();
    expect(count.number).toBe(1);
  });
  test("测试add1",()=>{
    console.log("测试add1");
    count.add1();
    expect(count.number).toBe(2);
  });
})
describe("测试minus相关代码",()=>{
  test("测试minus",()=>{
    console.log("测试minus");
    count.minus();
    expect(count.number).toBe(-1);
  });
  test("测试minus1",()=>{
    console.log("测试minus1");
    count.minus1();
    expect(count.number).toBe(-2);
  });
})