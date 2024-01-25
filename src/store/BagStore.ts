import { create } from "zustand";

type Item = {
    id: string;
    name: string;
    imageSrc: {
        url: string;
    }
    price: number;
    extra?: [{
        name: string;
        quantity: number;
    }];
    quantity: number;
}

type BagStore = {
    bag: Item[],
    addToBag: (item: Item) => void;
    removeFromBag: (id: string) => void; 

}

export const useBagStore = create<BagStore>((set) => {
    return {
        bag: [],
        addToBag: (item) => set((state) => ({bag: [...state.bag, item]})),
        removeFromBag: (id) => {
            set((state) => ({bag: state.bag.filter((item) => item.id !== id)}))
        }
    }
})