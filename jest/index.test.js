//toBe
const {add,reduce,multy}=require("./index.js");
test("测试加法",()=>{
    expect(add(1,2)).toBe(3);
});
test("测试建法",()=>{
    expect(reduce(1,2)).toBe(-1);
});
test("测试乘法",()=>{
    expect(multy(2,3)).toBe(6);
});

//toEqual
test("测试对象内容相等",()=>{
    const person={name:"ximelly"}
    expect(person).toEqual({name:"ximelly"});
});

//toBeNull
test("测试匹配null",()=>{
    const a=null;
    expect(a).toBeNull();
});

//toBeUndefined
test("测试匹配undefined",()=>{
    const a=undefined;
    expect(a).toBeUndefined();
});

//toBeDefined
test("测试匹配defined",()=>{
    let a=null;
    expect(a).toBeDefined();
});

//toBeTruthy
test("测试匹配true",()=>{
    let a=1;
    expect(a).toBeTruthy();
});

//toBeTruthy
test("not测试匹配true",()=>{
    let a=0;
    expect(a).not.toBeTruthy();
});

test("测试匹配false",()=>{
    let a=0;
    expect(a).toBeFalsy();
});


//数字相关匹配器
test("toBeGreaterThan",()=>{
    let a=0;
    expect(a).toBeGreaterThan(-1);
});
test("toBeLessThan",()=>{
    let a=0;
    expect(a).toBeLessThan(1);
});
test("toBeGreaterThanOrEqual",()=>{
    let a=0;
    expect(a).toBeGreaterThanOrEqual(0);
});
test("toBeLessThanOrEqual",()=>{
    let a=0;
    expect(a).toBeLessThanOrEqual(0);
});
test("toBeCloseTo",()=>{
    const a=0.1,b=0.2;
    expect(a+b).toBeCloseTo(0.3);
});


//字符串相关匹配器
test("toMatch",()=>{
    const a="https://github.com/ximelly/js_test/blob/master/native/index.test.js";
    expect(a).toMatch("ximelly");
    expect(a).toMatch(/master\/n/);
});


//数组\Set相关匹配器
test("toContain",()=>{
    const a=[1,2,3,4,5];
    const b=new Set(a);
    expect(a).toContain(3);
    expect(b).toContain(1);
});


//异常
test("toThrow",()=>{
    const throwNewError=()=>{
        throw new Error('this is a new error');
    }
    expect(throwNewError).toThrow();
    expect(throwNewError).toThrow('this is a new error');
});