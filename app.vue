<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import FormInputs from "./src/components/FormInputs.vue";
export default {
  components: {
    FormInputs,
  },
};
</script>
