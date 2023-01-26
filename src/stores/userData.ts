import { defineStore } from "pinia";
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
    addItem(firstname: string, lastname: string, comment: string) : void {
      this.Items.push(<userData>{
        id: uuidv4(),
        firstName: firstname,
        lastName: lastname,
        comment: comment,
      });
    },
    deleteItem(id: string) : void{
      const index = this.Items.findIndex(item => item.id === id);
      if (index > -1) {
        this.Items = [...this.Items.slice(0, index), ...this.Items.slice(index + 1)];
      }
    },
  },
});

