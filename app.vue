<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import FormInputs from "./src/components/FormInputs.vue";
import FormPlus from "./components/FormPlus.vue";
export default {
  components: {
    FormInputs,
    FormPlus,
  },
};
</script>
