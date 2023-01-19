<template>
  <div>
    <form>
      <div class="form-group">
        <label for="firstName">Firstname</label>
        <input
          type="text"
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
          class="form-control"
          id="lastName"
          placeholder="Lastname"
        />
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <input
          type="text"
          class="form-control"
          id="comment"
          placeholder="Comment"
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
  <div>{{ userData.getTest }}</div>
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
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { useUserDataStore } from "../stores/userData";
// const userData = useUserDataStore()

export default defineComponent({
  setup() {
    const userData = useUserDataStore();
    const addUserData = (
      firstname: string,
      lastname: string,
      comment: string
    ) => {
      userData.addItem(firstname, lastname, comment);
    };

    return {
      userData,
      addUserData
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
