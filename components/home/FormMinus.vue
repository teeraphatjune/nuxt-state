<template>
    <div>
        Form Minus Data Is : {{ getMinusNumber }}
    </div>
</template>
<script lang="ts">
import { storeToRefs } from "pinia";
import { useNumberData } from "../../stores/numberData";

export default defineComponent({
  setup() {
    const numberDataStore = useNumberData();
    const {number1, number2} = storeToRefs(numberDataStore);
    const getMinusNumber = computed(() => {return Number(number1.value) - Number(number2.value)});
    return {
      numberDataStore,
      getMinusNumber,
    };
  },
});
</script>