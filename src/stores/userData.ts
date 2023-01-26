import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { Ref } from "vue";
interface userData {
  id: string;
  firstName?: string;
  lastName?: string;
  comment?: string;
}

export const useUserDataStore = defineStore("userData", () => {
  const items = ref(<userData[]>[]);
  const test = ref('test text');

  const getItems = computed(() => items.value)
  const getTest = computed(() => test.value)

  const addItem = (firstname: string, lastname: string, comment: string): void => {
      items.value.push(<userData>{
        id: uuidv4(),
        firstName: firstname,
        lastName: lastname,
        comment: comment,
      });
    };

  const deleteItem = (id: string): void => {
    const index = items.value.findIndex(item => item.id === id);
      if (index > -1) {
        items.value = [...items.value.slice(0, index), ...items.value.slice(index + 1)];
      }
  };

  return { addItem, deleteItem, getItems, getTest };
});


