import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Item {
  id: string;
  title: string;
}

export default function useAsyncStorage(key: string, initialValue: Item[]) {
  const [items, setItems] = useState<Item[]>(initialValue);

  useEffect(() => {
    (async () => {
      try {
        const existingItems = await AsyncStorage.getItem(key);
        if (existingItems) {
          setItems(JSON.parse(existingItems));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [key]);

  async function addItem(newTitle: string) {
    try {
      const newItem = {
        id: Date.now().toString(),
        title: newTitle,
      };
      const newItems = [...items, newItem];
      await AsyncStorage.setItem(key, JSON.stringify(newItems));
      setItems(newItems);
    } catch (error) {
      console.error(error);
    }
  }

  function itemExists(searchTerm: string): boolean {
    return items.find((item) => item.title === searchTerm) !== undefined;
  }

  async function removeItemById(id: string) {
    try {
      const currentItems = items;
      const withoutItem = currentItems.filter((item) => item.id !== id);

      await AsyncStorage.setItem(key, JSON.stringify(withoutItem));
      setItems(withoutItem);
    } catch (error) {
      console.error(error);
    }
  }

  return { items, addItem, removeItemById, itemExists };
}
