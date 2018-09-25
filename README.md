# Vue.js Date Range Picker

`@gravitano/vue-date-range-picker` is a Vue.js wrapper for [daterangepicker](http://www.daterangepicker.com) plugin.

## Installation

To install the new package, use one of those commands:

```
npm i @gravitano/vue-date-range-picker
# OR
yarn add @gravitano/vue-date-range-picker
```

## Usage

```js
// main.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import the plugin
import DateRangePicker from "@gravitano/vue-date-range-picker";

Vue.config.productionTip = false;

// use the plugin
Vue.use(DateRangePicker);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
```

# Props

| Name      | Type   | Default      | Description                                                                                                                  |
| --------- | ------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| v-model   | Array  | `[]`         | Set v-model to the the content or data property you wish to bind it to                                                       |
| format    | String | `DD/MM/YYYY` | Date format                                                                                                                  |
| className | String | -            | Additional class name for the input                                                                                          |
| options   | Object | `{}`         | The [daterangepicker](http://www.daterangepicker.com)'s options. Learn more [here](http://www.daterangepicker.com/#options). |

## Development Setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

## License

MIT
