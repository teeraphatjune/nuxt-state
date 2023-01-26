<template>
  <div>
    <nav>
      <NuxtLink to="/"><li class="btn btn-warning">Back</li></NuxtLink>
      <ul>
        <li v-for="(item, index) in userData.getItems">
          {{ index+1 }}. 
          <p>
            First Name : {{ item.firstName }} <br>
            Last Name : {{ item.lastName }} <br>
            Comment Is : {{ item.comment }}
          </p>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { useUserDataStore } from "../stores/userData";
const userData = useUserDataStore();

</script>
