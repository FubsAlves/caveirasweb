'use client'

import GET_SNACKS from "@/queries/snacks";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Carousel } from '@mantine/carousel';
import Image from "next/image";
import { Player } from '@lottiefiles/react-lottie-player';
import { Suspense, useRef } from "react";
import Loading from "@/components/loading";
import { ApolloError } from "@apollo/client";
import GET_NEWESTSNACKS from "@/queries/newestsnacks";
import { usePathname } from "next/navigation";
import { Button } from '@mantine/core';
import { useBagStore } from "@/store/BagStore";
import { notifications } from '@mantine/notifications';
import { useBagStatusStore } from "@/store/BagStatusStore";


interface DataProps {
    snacks : {
        id: string;
        name: string;
        logoSrc: {
            url: string;
        },
        secondaryLogoSrc: {
            url: string;
        }
        imageSrc: {
            url: string;
        }
        description: string,
        price: Number;
    }
}

interface QueryProps {
    snacks: DataProps[];
    error: ApolloError | undefined;
}


export default function MenuList({params} : any) {
    

    const selectedCategory = params.menulist;
    const pathname = usePathname();
    const QUERY = pathname === '/menu/Lan%C3%A7amentos' ? GET_NEWESTSNACKS : GET_SNACKS; 
    const { error, data } = useSuspenseQuery<QueryProps>(QUERY, {variables: {selectedCategory}, fetchPolicy: "network-only"});
    const animation = useRef(null);
    const addItem = useBagStore(state => state.addItemToBag);
    const toogleBag = useBagStatusStore(state => state.turntrue);
    console.log(data)
    
    
    return (
        <Suspense fallback={<Loading/>}>
            {data.snacks.length >= 1 ? <div className="h-auto md:h-[120vh] mb-7 bg-white">
                    <Carousel withControls height="100%" style={{ flex: 1 }}>
                        {data.snacks.map((snack: any) => {
                            return (
                            <Carousel.Slide className="flex flex-col items-center" key={snack.id}>
                                <div className="flex my-4 space-x-4 mt-4">
                                    {snack.logoSrc ? <Image src={snack.logoSrc.url} style={{height: "auto", width: "auto"}} width={snack.primaryLogoWidthCustomSize != null ? snack.primaryLogoWidthCustomSize : 64 } height={snack.primaryLogoHeightCustomSize != null ? snack.primaryLogoHeightCustomSize : 64 } alt={"Primary logo for " + snack.name}/> : ""}
                                    {snack.secondaryLogoSrc ? <Image src={snack.secondaryLogoSrc.url} style={{height: "auto", width: "auto"}} width={64} height={64} alt={"Secondary logo for " + snack.name}/> : ""}
                                </div>
                                <div className="flex text-2xl font-semibold text-[#502314] text-center mb-10 md:mb-24">{snack.name}</div>
                                <div className="flex w-3/4 justify-center">
                                    {snack.isNew ? <Player src="/animation/newSnack.json" className="absolute top-[23%] left-[8%] w-14 h-14 md:w-20 md:h-20 md:left-[32%]" loop autoplay ref={animation}/> : ""}
                                    <Image src={snack.imageSrc.url} style={{height: "auto", width: "auto"}} priority={true} width={snack.imageWidthCustomSize != null ? snack.imageWidthCustomSize : 200 } height={snack.imageHeightCustomSize != null ? snack.imageHeightCustomSize : 300 } alt={"Image for " + snack.name}/>
                                </div>
                                <div className="flex w-[75%] my-4 justify-center items-center">
                                    <p className="text-[#502314] font-sans text-md italic my-2 text-center leading-none">{snack.description}</p>
                                </div>
                                <div className="flex w-2/4 my-4 justify-center">    
                                    <h3 className="text-[#502314] font-semibold text-2xl text-center">R${snack.price.toFixed(2)}</h3>
                                </div>
                                <div className="flex w-2/4  my-4 justify-center">
                                    <Button color={pathname === '/menu/Chickens' ? '#f07100' : '#B71105'} variant="filled" radius="md" onClick={() => {
                                        addItem({
                                            id: snack.id,
                                            name: snack.name,
                                            price: snack.price,
                                            imageSrc: {
                                                url: snack.imageSrc.url,
                                            },
                                            imageCustomSize: {
                                                width: snack.bagImageWidthCustomSize,
                                                height: snack.bagImageHeightCustomSize,
                                            }
                                            
                                        })

                                        notifications.show({
                                            color: "green",
                                            title: 'Item adicionado!',
                                            message: `${snack.name} foi adicionado(a) a sacola!`
                                        })

                                        toogleBag();
                                    }}>Adicionar</Button>
                                </div>
                                
                        </Carousel.Slide>
                            )
                        })}
                        
                    </Carousel>
            </div> : <div className="flex justify-center items-center min-h-[100vh] w-full"><h4 className="text-caveirito italic">Não há itens disponíveis.</h4></div> }
        </Suspense>
    );
}