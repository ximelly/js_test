
function test(desc,cb){
    try{
        cb&&cb();
        console.log(`${desc}测试通过`);
    }catch(e){
        console.log(`${desc}测试不通过，${e}`);
    }
}
function expect(result){
    return {
        toBe:function(actual){
            if(result!==actual){
                throw new Error(`期望：${actual}，实际${result}`);
            }
        }
    }
}
test("add(1,2)",function(){
    expect(add(1,2)).toBe(3);
});
test("reduce(1,2)",function(){
    expect(reduce(1,2)).toBe(3);
});
