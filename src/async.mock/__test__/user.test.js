import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const result = register("true username", "true password");
    await expect(result).resolves.toEqual({ success: "true" });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyPassword.mockImplementationOnce(false);
    verifyUsername.mockImplementationOnce(false);
    const result = register("false username", "false password");
    await expect(result).rejects.toThrow("wrong username or password");
  });
});
