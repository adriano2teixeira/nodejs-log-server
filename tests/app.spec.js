"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _supertest = require('supertest'); var _supertest2 = _interopRequireDefault(_supertest);
var _main = require('../main');

describe("test app endpoints", () => {
  it("should return a 200 status for default endpoint", () => {
    _supertest2.default.call(void 0, _main.app)
      .get("/")
      .expect("Content-Type", "/json/")
      .expect(200)
      .expect({ hello: "world" })
      .expect({ hello: "world" })
  });
});
