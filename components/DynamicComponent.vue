<template>
  <component :is="currentComponent" :key="1"/>
</template>

<script>
export default defineComponent({
  data() {
    return {
      currentComponent: null,
    };
  },
  mounted() {
    const componentName = "FormDivide";
    this.currentComponent = defineAsyncComponent(() =>
      import(`./${componentName}.vue`)
    );
  },
});
</script>
