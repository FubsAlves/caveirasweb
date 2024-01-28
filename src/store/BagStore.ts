import { create } from "zustand";

 interface Item  {
    id: string;
    name: string;
    imageSrc: {
        url: string;
    }
    quantity?: number | undefined | null;
    price: number;
    extra?: [{
        name: string;
        quantity: number;
    }];
    
}
interface BagStore {
    bag: Item[],
    addItemToBag: (item: Item) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    removeItemFromBag: (id: string) => void;    
}

export const useBagStore = create<BagStore>((set, get) => {
    return {
        bag: [],
      
        addItemToBag: (item: Item) => {
            const itemExists = get().bag.find(
              (bag) => bag.id === item.id
            );
        
            if (itemExists) {
              if (typeof itemExists.quantity === "number") {
                itemExists.quantity++;
              }
        
              set({ bag: [...get().bag] });
            } else {
              set({ bag: [...get().bag, { ...item, quantity: 1 }] });
            }
          },

          increaseQuantity: (id) => {
            const itemExists = get().bag.find(
              (bag) => bag.id === id
            );
        
            if (itemExists) {
              if (typeof itemExists.quantity === "number") {
                itemExists.quantity++;
              }
        
              set({ bag: [...get().bag] });
            }
          },
          
          decreaseQuantity: (id) => {
            const itemExists = get().bag.find(
              (bag) => bag.id === id
            );
        
            if (itemExists) {
              if (typeof itemExists.quantity === "number") {
                if (itemExists.quantity === 1) {
                  const updatedBagItems = get().bag.filter(
                    (item) => item.id !== id
                  );
                  set({ bag: updatedBagItems });
                } else {
                  itemExists.quantity--;
                  set({ bag: [...get().bag] });
                }
              }
            }
          },

          removeItemFromBag: (id) => {
            const itemExists = get().bag.find(
              (bag) => bag.id === id
            );
        
            if (itemExists) {
              if (typeof itemExists.quantity === "number") {
                const updatedBagItems = get().bag.filter(
                  (item) => item.id !== id
                );
                set({ bag: updatedBagItems });
              }
            }
          },
    }
})