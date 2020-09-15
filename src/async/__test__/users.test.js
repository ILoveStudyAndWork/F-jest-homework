import axios from "axios";
import getUsers from "../users";

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    // act
    const result = getUsers();
    // assert
    // 调用次数 结果 影响的部分
    await expect(result).resolves.toEqual({});
    expect(axios.get).toHaveBeenCalled();
  });
});
