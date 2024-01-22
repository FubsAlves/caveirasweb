"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
   
    const pathname = usePathname(); 
   
    return (
        <div className={pathname === '/menu/Chickens' ? "flex flex-row justify-center items-end w-[100vw] h-[10vh] bg-chickens bottom-0" : "flex flex-row justify-center items-end w-[100vw] h-[10vh] bg-caveirito bottom-0"}>
            <Image src="/images/cb.png" style={{width: "auto", height: "auto"}} width={60} height={60} alt="CB"/>
        </div>
    );
}   