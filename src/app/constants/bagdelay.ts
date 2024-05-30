"use client"

import { useBagStatusStore } from "@/store/BagStatusStore";

 export default class BagDelay {

    private closeBag = useBagStatusStore(state => state.turnFalse);

     private closeDelay? : ReturnType<typeof setTimeout>

    setCloseDelay() {
         
        this.closeDelay = setTimeout(() => {
            this.closeBag();
        }, 4000)
       
        
        
    }

    clearCloseDelay() {
        console.log(this.closeDelay);
        clearTimeout(this.closeDelay)
    }

}

export const bagDelay = new BagDelay();

