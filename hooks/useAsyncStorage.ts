import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useAsyncStorage(key: string, initialValue: string[]) {
  const [items, setItems] = useState<string[]>(initialValue);

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

  async function addItem(newItem: string) {
    try {
      const currentItems = await AsyncStorage.getItem(key);
      const parsedItems = currentItems ? JSON.parse(currentItems) : [];

      const newItems = [...parsedItems, newItem];
      await AsyncStorage.setItem(key, JSON.stringify(newItems));
      setItems(newItems);
    } catch (error) {
      console.error(error);
    }
  }

  return { items, addItem };
}
