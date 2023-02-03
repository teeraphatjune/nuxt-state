<template>
    <component :is="currentComponent" :key="1"/>
</template>
  
  <script lang="ts">
  
  export default {
    setup() {
      const currentComponent = shallowRef(null);
  
      onMounted(async () => {
        // API or Something to get components name
        const componentName = "FormDivide";
        currentComponent.value = (await import(`./${componentName}.vue`)).default;
      });
  
      return {
        currentComponent,
      };
    },
  };
  </script>