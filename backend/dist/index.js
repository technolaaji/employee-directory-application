"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

var _chalkConfig = _interopRequireDefault(require("./utils/chalkConfig"));

var _connectToDB = require("./utils/connectToDB");

var _employeeModelFunction = _interopRequireDefault(require("./models/modelFunctions/employeeModelFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('combined'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/', _index["default"]);
app.listen(3000, function () {
  console.log(_chalkConfig["default"].success("Your server is running on port 3000"));
  (0, _connectToDB.connectToDB)();
});