const {get,get2,get3}=require("./fetch.js");

//回调类型异步函数调用  done
test("测试异步获取数据",(done)=>{
    get((data)=>{
        expect(data).toEqual({"success": true});
        done();
    })
});

//无回调类型异步函数调用 return
test("测试异步获取数据",()=>{
    return get2().then((reponse)=>{
        expect(reponse.data).toEqual({"success": true});
    })
});
test("测试异步获取数据测试2",()=>{
    return expect(get2()).resolves.toMatchObject({data:{"success": true}});
});
test("测试异步获取数据测试2",async()=>{
    await expect(get2()).resolves.toMatchObject({data:{"success": true}});
});
test("测试异步获取数据测试2",async()=>{
    let response=await get2();
    expect(response.data).toEqual({"success": true});
});

//测试404e
test("测试404",()=>{
    expect.assertions(1);//至少执行一次
    return get3().catch((e)=>{
        console.log(e.toString());//Request failed with status code 404
        expect(e.toString().indexOf("404")>-1).toBe(true);
    })
});
test("测试404",()=>{
    return expect(get3()).rejects.toThrow();
});
test("测试404",async()=>{
    await expect(get3()).rejects.toThrow();
});
test("测试404",async()=>{
    expect.assertions(1);//至少执行一次
    try {
        await get3();
    } catch (e) {
        expect(e.toString().indexOf("404")>-1).toBe(true);
    }
});