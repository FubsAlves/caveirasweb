"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Bag from "../bag";
import { useState } from "react";

export default function Footer() {
   
    const pathname = usePathname(); 
    const [openedBag, setOpenedBag] = useState(false);
    return (
        <>
            <div className="w-full fixed bottom-0 z-[1001]">
                <Bag opened={openedBag}/>
                <div className={pathname === '/menu/Chickens' ? "flex justify-center w-[100vw] h-12 bg-chickens" : "flex justify-center w-[100vw] h-12 bg-caveirito"}>
                    <Image className="pt-2" src="/images/cb.png" style={{ width: "auto", height: "auto" }} width={60} height={60} alt="CB" onClick={() => {setOpenedBag(!openedBag)}} />
                </div>
            </div>
            
        </>
    );
}   