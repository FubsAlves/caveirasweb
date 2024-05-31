import { create } from "zustand";

interface BagStatusStore {
    status: boolean,
    toogleShow: () => void,
    turnTrue: () => void;
    turnFalse: () => void;
}

interface BagDelayStore {
    delay?: NodeJS.Timeout | undefined;
    setDelay: () => void,
    clearDelay: () => void;
}

export const useBagStatusStore = create<BagStatusStore>((set) => {
    return {
        status: false,
      
        toogleShow: () => set((state) => ({ status: !state.status})),

        turnTrue: () => set(() => ({status: true})),

        turnFalse: () => set(() => ({status: false})),
          
    }
})

export const useBagDelayStore = create<BagDelayStore>((set, get) => {
    
    
    return {
        delay: undefined,
        
        setDelay: () => {
            const getStatus = useBagStatusStore.getState().status;
            if(getStatus) {
               set({delay : setTimeout(() => {useBagStatusStore.getState().turnFalse()}, 10000)});
            }
            
        },

        clearDelay: () => {
            clearTimeout(get().delay);

            
        }
         
    }
})