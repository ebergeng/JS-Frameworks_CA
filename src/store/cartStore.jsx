import { create } from "zustand";

const getSavedItems = () => {
  const savedItems = localStorage.getItem("cartItems");
  return savedItems ? JSON.parse(savedItems) : [];
};

export const useStore = create((set) => ({
  items: getSavedItems(),
  setItems: (newItem) =>
    set((state) => {
      const newItems = [...state.items, newItem];
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return { items: newItems };
    }),

  removeOneItem: (itemId) =>
    set((state) => {
      let itemRemoved = false;
      const newItems = state.items.filter((item) => {
        if (!itemRemoved && item.id === itemId) {
          itemRemoved = true;
          return false;
        }
        return true;
      });
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return { items: newItems };
    }),

  clearItems: () =>
    set(() => {
      localStorage.removeItem("cartItems");
      return { items: [] };
    }),
}));
