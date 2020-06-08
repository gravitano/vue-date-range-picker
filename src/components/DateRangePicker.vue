<template>
    <input type="text" :class="className" />
</template>

<script>
import "daterangepicker/daterangepicker";
import "daterangepicker/daterangepicker.css";
import $ from "jquery";

export default {
  name: "date-range-picker",
  props: {
    value: {},
    options: {
      type: Object,
      default: function() {
        return {};
      }
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
    isSingleDatePicker() {
      return this.options.singleDatePicker;
    },
    startDate() {
      if (this.isSingleDatePicker) {
        return this.range;
      }
      return this.range[0];
    },
    endDate() {
      if (this.isSingleDatePicker) {
        return this.range;
      }
      return this.range[1];
    },
    customOptions() {
      return {
        locale: {
          format: this.format
        },
        ...this.options
      };
    }
  },
  watch: {
    value(value) {
      const el = $(this.$el);
      if (this.isSingleDatePicker) {
        el.data('daterangepicker').setStartDate(value);
      } else {
        el.data('daterangepicker').setStartDate(value[0]);
        el.data('daterangepicker').setEndDate(value[1]);
      }
    },
    range(value) {
      this.$emit("change", value);
      this.$emit("input", value);
    }
  },
  methods: {
    show() {
      $(this.$el).data('daterangepicker').show();
    },
    hide() {
      $(this.$el).data('daterangepicker').hide();
    }
  },
  created() {
    this.range = this.value;
  },
  mounted() {
    this.$nextTick(() => {
      const el = $(this.$el);
      el.daterangepicker(this.customOptions);
      el.on("apply.daterangepicker", (event, picker) => {
        const startDate = picker.startDate.format(this.format);
        const endDate = picker.endDate.format(this.format);
        if (this.isSingleDatePicker) {
          this.range = startDate;
        } else {
          this.range = [startDate, endDate];
        }
      });
      el.on("cancel.daterangepicker", () => {
        if (this.isSingleDatePicker) {
          this.range = "";
        } else {
          this.range = [];
        }
      });
    });
  },
  beforeDestroy() {
    $(this.$el)
      .daterangepicker("hide")
      .daterangepicker("destroy");
  }
};
</script>
