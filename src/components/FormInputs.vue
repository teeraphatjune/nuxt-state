<template>
  <div>
    <form @submit.prevent="addUserData">
      <div class="form-group">
        <label for="firstName">Firstname</label>
        <input
          type="text"
          v-model="firstname"
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
  {{ userData.test }}
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
        <td><button type="submit" class="btn btn-danger" @click="deleteUserData(item.id)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { useUserDataStore } from "../stores/userData";
export default defineComponent({
  setup() {
    const userData = useUserDataStore();
    const firstname = ref("");
    const lastname = ref("");
    const comment = ref("");
    userData.test = "t12312";

    const addUserData = () => {
      userData.addItem(firstname.value, lastname.value, comment.value);
      firstname.value = "";
      lastname.value = "";
      comment.value = "";
    };

    const deleteUserData = (id : string) => {
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

// export default {
//   data() {
//     return {
//       tableRows: [
//         { firstname: 1123, lastname: 2, comment: 3 },
//         { firstname: 1123, lastname: 2, comment: 3 },
//       ],
//       userData : useUserDataStore()
//     };
//   },
//   methods: {},
// };
</script>
