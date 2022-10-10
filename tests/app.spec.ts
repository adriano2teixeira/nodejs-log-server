import request from "supertest";
import { app } from "../main";

describe("test app endpoints", () => {
  it("should return a 200 status for default endpoint", () => {
    request(app)
      .get("/")
      .expect("Content-Type", "/json/")
      .expect(200)
      .expect({ hello: "world" })
      .expect({ hello: "world" })
  });
});
