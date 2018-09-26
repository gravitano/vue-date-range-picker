<template>
  <div id="app">
    <h1 class="page-title">Vue Date Range Picker Demo:</h1>
    <div>
      <h3>Basic Example:</h3>
      <date-range-picker v-model="range"/>
    </div>
    <div>
      <h3>DateRangePicker with options:</h3>
      <date-range-picker v-model="range2" :options="options"/>
    </div>
    <div>
      <h3>Single Date Picker:</h3>
      <date-range-picker v-model="singleDatePickerValue" :options="options3"/>
    </div>
    <div>
      <h3>Predefined Date Ranges:</h3>
      <date-range-picker v-model="range3" :options="options4"/>
    </div>
  </div>
</template>

<script>
import DateRangePicker from "./components/DateRangePicker";
import moment from "moment";

export default {
  name: "app",
  components: {
    DateRangePicker
  },
  data: () => ({
    range: [],
    range2: [],
    range3: [],
    singleDatePickerValue: "01/01/2013",
    options: {
      timePicker: true,
      startDate: moment().startOf("hour"),
      endDate: moment()
        .startOf("hour")
        .add(32, "hour"),
      locale: {
        format: "M/DD hh:mm A"
      }
    },
    options3: {
      singleDatePicker: true,
      // showDropdowns: true,
      minYear: 2001,
      maxYear: +moment().format("YYYY")
    },
    options4: {
      startDate: moment().subtract(29, "days"),
      endDate: moment(),
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment()
            .subtract(1, "month")
            .startOf("month"),
          moment()
            .subtract(1, "month")
            .endOf("month")
        ]
      }
    }
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.page-title {
  text-align: center;
}
</style>
