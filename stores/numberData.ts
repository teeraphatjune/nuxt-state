import { defineStore } from "pinia";
import { Ref } from "vue";

export const useNumberData = defineStore("numberData", () => {
  const number1: Ref<number> = ref(0);
  const number2: Ref<number> = ref(0);

  // const getMultiplyNumber = computed(() => number1.value * number2.value);
  // const getDivideNumber = computed(() => number1.value / number2.value);
  // const getMinusNumber = computed(() => number1.value - number2.value);
  // const getPlusNumber = computed(() => number1.value + number2.value);

  const addNumber = (n1: number, n2: number) => {
    number1.value = n1;
    number2.value = n2;
  };


  return {
    // getMultiplyNumber,
    // getDivideNumber,
    // getMinusNumber,
    // getPlusNumber,
    number1,
    number2,
    addNumber,
  };
});


