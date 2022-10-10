import hello from "../utils/hello";

describe("services test", () => {
  it("should return hello: world", () => {
    const { hello: msg } = hello()
    expect(msg).toBe("world");
  });
});
