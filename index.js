"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DateRangePicker = require("./src/components/DateRangePicker");

var _DateRangePicker2 = _interopRequireDefault(_DateRangePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueDateRangePickerPlugin = {
  install: function install(Vue) {
    Vue.component(_DateRangePicker2.default.name, _DateRangePicker2.default);
  }
};

exports.default = VueDateRangePickerPlugin;
