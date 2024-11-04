"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Bag from "../bag";
import { useBagDelayStore, useBagStatusStore } from "@/store/BagStatusStore";
import { Button } from "@mantine/core";
import { notifications } from '@mantine/notifications';
import { useBagStore } from "@/store/BagStore";

export default function Footer() {
   
    const pathname : string = usePathname(); 
    const bagStatus = useBagStatusStore();
    const currentSnack = useBagStore(state => state.currentSnack)
    const addItem = useBagStore(state => state.addItemToBag);
    const toogleBag = useBagStatusStore(state => state.turnTrue);
    const setDelay = useBagDelayStore(state => state.setDelay);
    
    return (
        <>
            <div className="w-full fixed z-[1001] bottom-0"> 
                
                <Bag opened={bagStatus.status}/>
                <div className={`flex items-center justify-center w-full msm:h-10 mdm:h-10 mlg:h-16 shadow-2xl shadow-stone-900" ${!pathname.includes("/menu/") ? "bg-caveirito" : ""}`}>
                        { pathname.includes('/menu/') ? <Button className="" color={`${pathname.includes("menu/Chickens") ? "#f07100" : "#B71105"}`} style={{color: "#fff", fontWeight: "bolder"}} variant="filled" radius="md" onClick={() => {
                                        addItem({
                                            id: currentSnack.id,
                                            name: currentSnack.name,
                                            price: currentSnack.price,
                                            imageSrc: {
                                                url: currentSnack.imageSrc.url,
                                            },
                                            imageCustomSize: {
                                                width: currentSnack.bagImageWidthCustomSize,
                                                height: currentSnack.bagImageHeightCustomSize,
                                            }
                                            
                                        })

                                        notifications.show({
                                            color: "green",
                                            title: 'Item adicionado!',
                                            message: `${currentSnack.name} foi adicionado(a) a sacola!`
                                        })

                                        toogleBag();
                                        setDelay();
                                    }}>Adicionar ao pedido</Button>: <Image className="relative pt-4 w-16 h-16" src="/images/cb.png" alt="Caveirito" width={600} height={1500}/> }
                        
                        
                </div>
                
            </div>
            
        </>
    );
}   