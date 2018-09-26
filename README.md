# Vue.js Date Range Picker

`@gravitano/vue-date-range-picker` is a Vue.js wrapper for [daterangepicker](http://www.daterangepicker.com) plugin.

## Installation

To install the package, use one of those commands:

```
npm i @gravitano/vue-date-range-picker
# OR
yarn add @gravitano/vue-date-range-picker
```

## Usage

### Global Usage

Basically, just register the DateRangePicker component as vue plugin via `Vue.use` method.

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

Once the plugin installed, you can use it like so:

```html
<template>
  <div>
    <date-range-picker v-model="range" />
  </div>
</template>

<script>
export default {
  data: () => ({
    range: ["01/09/2018", "01/10/2018"]
  })
};
</script>
```

### Per-component Usage

If you want to use the DateRangePicker component only on certain components, you can do it like this:

```html
<template>
  <div>
    <date-range-picker v-model="range" />
  </div>
</template>

<script>
// import the package
import DateRangePicker from "@gravitano/vue-date-range-picker";

export default {
  components: {
    DateRangePicker
  },
  data: () => ({
    range: ["01/09/2018", "01/10/2018"]
  })
};
</script>

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
