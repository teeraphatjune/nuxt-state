import { defineStore, acceptHMRUpdate } from "pinia";
import { v4 as uuidv4 } from 'uuid';
interface userData {
  id: number;
  firstName?: string;
  lastName?: string;
  comment?: string;
}

export const useUserDataStore = defineStore({
  id: "userData",
  state: () => ({
    Items: <userData[]>[],
    test: "test_text" as string,
  }),
  getters: {
    getTest: (state): string => state.test, // get normal text
    getItems: (state): userData[] => state.Items,
  },
  actions: {
    addItem(firstname: string, lastname: string, comment: string) {
      this.Items.push(<userData>{
        firstName: firstname,
        lastName: lastname,
        comment: comment,
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserDataStore, import.meta.hot));
}
