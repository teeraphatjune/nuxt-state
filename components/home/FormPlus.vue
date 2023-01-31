<template>
    <div>
        Form Minus Plus Is : {{ getPlusNumber }}
    </div>
</template>
<script lang="ts">
import { storeToRefs } from "pinia";
import { useNumberData } from "../../stores/numberData";

export default defineComponent({
  setup() {
    const numberDataStore = useNumberData();
    const {number1, number2} = storeToRefs(numberDataStore);
    const getPlusNumber = computed(() => number1.value + number2.value);

    return {
      numberDataStore,
      getPlusNumber,
    };
  },
});
</script>