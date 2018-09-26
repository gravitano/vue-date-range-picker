import DateRangePicker from "./src/components/DateRangePicker";

const VueDateRangePickerPlugin = {
  install(Vue) {
    Vue.component(DateRangePicker.name, DateRangePicker);
  }
};

export default VueDateRangePickerPlugin;
