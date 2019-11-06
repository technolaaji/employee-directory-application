"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _employeeSchema = _interopRequireDefault(require("../schemas/employeeSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _mongoose["default"].model('employee', _employeeSchema["default"]);

exports["default"] = _default;