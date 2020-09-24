import getUsers from "../users";

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    // act
    const result = getUsers();
    // assert
    // 调用次数 结果 影响的部分
    await expect(result).resolves.toEqual({});
    // TODO feedback 对于有返回值的function,我们测试它的返回值就行了，不是很有必要测它的依赖是否被调用了

    // expect(axios.get).toHaveBeenCalled();
  });
});
