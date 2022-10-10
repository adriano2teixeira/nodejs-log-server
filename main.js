"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _http = require('http');
var _hello = require('./utils/hello'); var _hello2 = _interopRequireDefault(_hello);

 const app = _express2.default.call(void 0, ); exports.app = app;

exports.app.get("/", (_, res) => {
  const result = _hello2.default.call(void 0, );
  res.json(result);
});

const server = _http.createServer.call(void 0, exports.app);

const port = process.env.PORT || 3001;

server.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
