import DateRangePicker from "./src/components/DateRangePicker";

const VueDateRangePickerPlugin = {
  install(Vue, options) {
    Vue.component(DateRangePicker.name, DateRangePicker);
  }
};

export default VueDateRangePickerPlugin;
