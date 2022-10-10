"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _hello = require('../utils/hello'); var _hello2 = _interopRequireDefault(_hello);

describe("services test", () => {
  it("should return hello: world", () => {
    const { hello: msg } = _hello2.default.call(void 0, )
    expect(msg).toBe("world");
  });
});
