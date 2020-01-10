import {add,reduce,multy} from "./index.js"

test("测试加法",()=>{
    expect(add(1,2)).toBe(3);
});
test("测试建法",()=>{
    expect(reduce(1,2)).toBe(-1);
});
test("测试乘法",()=>{
    expect(multy(2,3)).toBe(6);
});