"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDB = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _chalkConfig = _interopRequireDefault(require("./chalkConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectToDB = function connectToDB() {
  _mongoose["default"].connect("mongodb://localhost:27017/employeeapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  _mongoose["default"].connection.on('connected', function () {
    console.log(_chalkConfig["default"].success("Mongoose is connected properly to your MongoDB database."));
  });

  _mongoose["default"].connection.on('error', function (err) {
    console.log(_chalkConfig["default"].error("Mongoose couldn't connect to your MongoDB database"));
    console.log(_chalkConfig["default"].info(err));
  });

  _mongoose["default"].connection.on('disconnected', function () {
    console.log(_chalkConfig["default"].danger("Mongoose has disconnected from your MongoDB database"));
  });
};

exports.connectToDB = connectToDB;