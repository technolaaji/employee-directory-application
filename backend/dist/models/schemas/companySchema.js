"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var company = _mongoose["default"].Schema({
  name: String,
  location: String,
  country: String,
  phone: String,
  expertise: [{
    type: String
  }]
});