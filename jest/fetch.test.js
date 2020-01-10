const {get}=require("./fetch.js");

//回调类型异步函数调用
test("测试异步获取数据",(done)=>{
    get((data)=>{
        expect(data).toEqual({"success": true});
        done();
    })
});