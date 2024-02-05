"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import DropdownMenu from "../dropdownmenu";
import { ActionIcon } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";

export default function Header() {
    
   const pathname = usePathname();
   const router = useRouter();
   
    return (
        <>
            
                <ActionIcon display={pathname !== '/' ? 'flex' : 'none'} className="absolute top-[6%]" variant="transparent" color="white" size="xl" aria-label="Return" onClick={() => {router.back()}}>
                    <IconChevronLeft style={{width: 41  , height: 41}} stroke={1.5} />
                </ActionIcon>
                <div className={pathname === '/menu/Chickens' ? "flex flex-row w-screen h-[18vh] bg-chickens justify-center items-center text-white" : `flex flex-row w-screen h-[${pathname === '/' ? '21vh' : '18vh'}] bg-caveirito justify-center items-center text-white`}>
                    <Link href="/menu" prefetch={true}>
                        {pathname === '/menu/Chickens' ? <Image src="/images/chickens-logo.webp" alt="Logo Chickens" style={{ height: '100px', width: '100px' }} width={2000} height={2000} quality={100} priority /> : <Image src="/images/logo.png" alt="Logo Caveiras" style={{ height: pathname === '/' ? '160px' : '70px', width: pathname === '/' ? '200px' : '100px' }} width={2000} height={2000} quality={100} priority />}
                    </Link>
                    <div className="place-items-end">
                        <DropdownMenu/>    
                    </div>
                              
                </div>
            
        </>
    );
}