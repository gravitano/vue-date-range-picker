<template>
    <div>
        <input type="text" class="daterange" :class="className" :value="dateRangeText" />
    </div>
</template>

<script>
import "daterangepicker/daterangepicker";
import "daterangepicker/daterangepicker.css";
import $ from "jquery";
import moment from "moment";

const now = moment();

export default {
  name: "date-range-picker",
  props: {
    value: {},
    options: {
      type: Object,
      default: () => {}
    },
    format: {
      type: String,
      default: "DD/MM/YYYY"
    },
    className: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    range: []
  }),
  computed: {
    dateRangeText() {
      return `${this.startDate} - ${this.endDate}`;
    },
    startDate() {
      return this.range[0] || now.format(this.format);
    },
    endDate() {
      return this.range[1] || now.format(this.format);
    }
  },
  watch: {
    value(value) {
      this.range = value;
    },
    range(value) {
      this.$emit("change", value);
      this.$emit("input", value);
    }
  },
  created() {
    this.range = this.value;
  },
  mounted() {
    this.$nextTick(() => {
      const options = {
        locale: {
          format: this.format
        },
        ...this.options
      };
      $(".daterange").daterangepicker(options, (start, end) => {
        const startDate = start.format(this.format);
        const endDate = end.format(this.format);
        this.range = [startDate, endDate];
      });
    });
  }
};
</script>
