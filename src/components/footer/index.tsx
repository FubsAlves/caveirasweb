"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Bag from "../bag";
import { useBagDelayStore, useBagStatusStore } from "@/store/BagStatusStore";
export default function Footer() {
   
    const pathname = usePathname(); 
    const bagStatus = useBagStatusStore();
    const setDelay = useBagDelayStore((state) => state.setDelay);
    
    return (
        <>
            <div className="w-full fixed z-[1001] bottom-0">
                <Bag opened={bagStatus.status}/>
                <div className={pathname === '/menu/Chickens' ? "flex justify-center w-full h-12 bg-chickens" : "flex justify-center w-full h-12 bg-caveirito"} onClick={() => 
                    {
                        bagStatus.toogleShow();
                        setDelay();
                    }
                    }
                    >
                    <Image className="pt-2" src="/images/cb.png" style={{ width: "auto", height: "auto" }} width={60} height={60} alt="CB" />
                </div>
            </div>
            
        </>
    );
}   