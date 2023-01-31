<template>
  <div>Form Divide Plus Is : {{getDivideNumber}}</div>
</template>
<script lang="ts">

import { storeToRefs } from "pinia";
import { useNumberData } from "../../stores/numberData";

export default defineComponent({
  setup() {
    const numberDataStore = useNumberData();
    const {number1, number2} = storeToRefs(numberDataStore);
    const getDivideNumber = computed(() => number1.value / number2.value);
    return {
      numberDataStore,
      getDivideNumber
    };
  },
});
</script>
