import { defineStore, acceptHMRUpdate } from "pinia";
import { v4 as uuidv4 } from "uuid";
interface userData {
  id: string;
  firstName?: string;
  lastName?: string;
  comment?: string;
}
export const useUserDataStore = defineStore('userData', {
  state: () => ({
    Items: <userData[]>[],
    test: ref('test'),
  }),
  getters: {
    getTest: (state): string => state.test, // get normal text
    getItems: (state): userData[] => state.Items,
  },
  actions: {
    addItem(firstname: string, lastname: string, comment: string) {
      this.Items.push(<userData>{
        id: uuidv4(),
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
