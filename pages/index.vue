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
      <div class="row">
        <div class="col">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
        <div class="col text-end">
          <NuxtLink to="/about"><li class="btn btn-warning">Next</li></NuxtLink>
        </div>
      </div>
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
import { defineStore } from "pinia";
import { Ref } from "vue";
import { v4 as uuidv4 } from "uuid";

interface userData {
  id: string;
  firstName?: string;
  lastName?: string;
  comment?: string;
}

export default defineComponent({
  setup() {
    const useUserDataStore = defineStore("userData", {
      state: () => ({
        Items: <userData[]>[],
        test: ref("test text"),
      }),
      getters: {
        getTest: (state): string => state.test, // get normal text
        getItems: (state): userData[] => state.Items,
      },
      actions: {
        addItem(firstname: string, lastname: string, comment: string): void {
          this.Items.push(<userData>{
            id: uuidv4(),
            firstName: firstname,
            lastName: lastname,
            comment: comment,
          });
        },
        deleteItem(id: string): void {
          const index = this.Items.findIndex((item) => item.id === id);
          if (index > -1) {
            this.Items = [
              ...this.Items.slice(0, index),
              ...this.Items.slice(index + 1),
            ];
          }
        },
      },
    });
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
