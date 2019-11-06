"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  success: _chalk["default"].bold.green,
  error: _chalk["default"].bold.yellow,
  danger: _chalk["default"].bold.red,
  info: _chalk["default"].bold.cyan
};
exports["default"] = _default;