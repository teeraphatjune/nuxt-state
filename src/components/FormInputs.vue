<template>
  <div>
    <form @submit.prevent="addUserData">
      Store : {{ userData.getTest }}
      <div class="form-group">
        <label for="firstName">Firstname</label>
        <input
          type="text"
          v-model="firstname"
          class="form-control"
          id="firstName"
          aria-describedby="firstnameHelp"
          placeholder="Firstname"
        />
      </div>
      <div class="form-group">
        <label for="lastName">LastName</label>
        <input
          type="text"
          v-model="lastname"
          class="form-control"
          id="lastName"
          placeholder="Lastname"
        />
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <input
          type="text"
          v-model="comment"
          class="form-control"
          id="comment"
          placeholder="Comment"
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Firstname</th>
        <th scope="col">Lastname</th>
        <th scope="col">Comment</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in userData.getItems">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.comment }}</td>
        <td>
          <button
            type="submit"
            class="btn btn-danger"
            @click="deleteUserData(item.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { comment } from "postcss";
import { Ref } from "vue";
import { useUserDataStore } from "../stores/userData";
export default defineComponent({
  setup() {
    
    const userData = useUserDataStore();
    const firstname: Ref<string> = ref("");
    const lastname: Ref<string> = ref("");
    const comment: Ref<string> = ref("");
    
    const addUserData = async () => {
      userData.addItem(firstname.value, lastname.value, comment.value);
      firstname.value = "";
      lastname.value = "";
      comment.value = "";
    };

    const deleteUserData = (id: string) => {
      userData.deleteItem(id);
    };

    return {
      firstname,
      lastname,
      comment,
      userData,
      addUserData,
      deleteUserData,
    };
  },
});
</script>
