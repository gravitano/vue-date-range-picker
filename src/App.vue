<template>
  <div id="app">
    <h1>Vue Date Range Picker Demo:</h1>
    <date-range-picker v-model="range"/>
  </div>
</template>

<script>
import DateRangePicker from "./components/DateRangePicker";

export default {
  name: "app",
  components: {
    DateRangePicker
  },
  data: () => ({
    range: ["01/09/2018", "09/10/2018"]
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
