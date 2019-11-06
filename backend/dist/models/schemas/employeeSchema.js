"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var employee = _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true
  },
  middleName: String,
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  company: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: 'company'
  },
  jobTitle: {
    type: String,
    required: true
  },
  picture: String,
  location: String
});

var _default = employee;
exports["default"] = _default;