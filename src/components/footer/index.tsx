"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Bag from "../bag";
import { useEffect, useState } from "react";
import { useBagStatusStore } from "@/store/BagStatusStore";

export default function Footer() {
   
    const pathname = usePathname(); 
    const bagStatus = useBagStatusStore();
    
    return (
        <>
            <div className="w-full fixed z-[1001]">
                <Bag opened={bagStatus.status}/>
                <div className={pathname === '/menu/Chickens' ? "flex justify-center w-full h-12 bg-chickens" : "flex justify-center w-full h-12 bg-caveirito"} onClick={() => {bagStatus.toogleShow()}}>
                    <Image className="pt-2" src="/images/cb.png" style={{ width: "auto", height: "auto" }} width={60} height={60} alt="CB" />
                </div>
            </div>
            
        </>
    );
}   