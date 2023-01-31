<template>
  <div>
    <form @submit.prevent="addNumber">
      <div class="form-group">
        <label for="number1">Number 1</label>
        <input
          type="number"
          v-model="n1"
          class="form-control"
          id="firstName"
          aria-describedby="emailHelp"
          placeholder="Firstname"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="number2">Number 2</label>
        <input
          type="number"
          v-model="n2"
          class="form-control"
          id="lastName"
          placeholder="Lastname"
        />
      </div>
      <br />
      <div class="row">
        <div class="col">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Ref } from "vue";
import { useNumberData } from "../../stores/numberData";

export default defineComponent({
  setup() {
    const numberDataStore = useNumberData();
    const n1: Ref<number> = ref(0);
    const n2: Ref<number> = ref(0);

    const addNumber = (): void => {
        numberDataStore.addNumber(n1.value, n2.value)
    };

    return {
      n1,
      n2,
      addNumber,
    };
  },
});
</script>
