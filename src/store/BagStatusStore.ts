import { create } from "zustand";


interface BagStatusStore {
    status: boolean,
    toogleShow: () => void,
    turntrue: () => void;
    turnFalse: () => void;
}

export const useBagStatusStore = create<BagStatusStore>((set) => {
    return {
        status: false,
      
        toogleShow: () => set((state) => ({ status: !state.status})),

        turntrue: () => set(() => ({status: true})),

        turnFalse: () => set(() => ({status: false})),
          
    }
})