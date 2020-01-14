import { generateConfig } from "./snap";
//U：同意更新快照
//每次更新一个 i→u
//不使用快照
test("测试配置文件", () => {
  expect(generateConfig()).toEqual({
    server: "http://localhost",
    port: "8080",
    name: "ximelly",
    age: 29
  });
});

//使用快照
test("测试配置文件", () => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date) //time可以为任何类型的data，不必每次都相等
  });
});

test.only("测试配置文件", () => {
  expect(generateConfig()).toMatchInlineSnapshot(//toMatchInlineSnapshot:生成行内快照
    {
      time: expect.any(Date) //time可以为任何类型的data，不必每次都相等
    },
    `
    Object {
      "age": 29,
      "name": "ximelly",
      "port": "8080",
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
