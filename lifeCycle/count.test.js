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

test("测试add",()=>{
  console.log("测试add");
  count.add();
  expect(count.number).toBe(1);
});
test("测试minus",()=>{
  console.log("测试minus");
  count.minus();
  expect(count.number).toBe(-1);
});