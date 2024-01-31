"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "../dropdownmenu";


export default function Header() {
    
   const pathname = usePathname();
  
    return (
        <>
            
                <div className={pathname === '/menu/Chickens' ? "flex w-screen h-[18vh] bg-chickens justify-center items-center text-white" : "flex w-screen h-[18vh] bg-caveirito justify-center items-center text-white"}>
                    <Link className="" href="/menu" prefetch={true}>
                        {pathname === '/menu/Chickens' ? <Image src="/images/chickens-logo.webp" alt="Logo Chickens" style={{ height: '100px', width: '100px' }} width={2000} height={2000} quality={100} priority /> : <Image src="/images/caveiras-logo.webp" alt="Logo Caveiras" style={{ height: '120px', width: '120px' }} width={2000} height={2000} quality={100} priority />}
                    </Link>
                    <DropdownMenu/>              
                </div>
            
            
        </>
    );
}