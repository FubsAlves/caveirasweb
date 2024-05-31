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
import { useBagDelayStore, useBagStatusStore } from "@/store/BagStatusStore";


interface DataProps {
    snacks : {
        id: string;
        name: string;
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
    const toogleBag = useBagStatusStore(state => state.turnTrue);
    const closeBag = useBagStatusStore(state => state.turnFalse);
    const setDelay = useBagDelayStore(state => state.setDelay);
     
    return (
        <Suspense fallback={<Loading/>}>
            {data.snacks.length >= 1 ? <div className="h-auto md:h-[120vh] bg-white">
                    <Carousel withControls height="100%" style={{ flex: 1 }}>
                        {data.snacks.map((snack: any) => {
                            return (
                            <Carousel.Slide className="flex flex-col items-center" key={snack.id}>
                                <div className="flex text-2xl font-semibold text-[#502314] text-center mb-3 md:mb-24">{snack.name}</div>
                                <div className="flex w-3/4 justify-center">
                                    {snack.isNew ? <Player src="/animation/newSnack.json" className="absolute top-[13%] left-[15%] w-14 h-14 md:w-20 md:h-20 md:top-[25%] md:left-[40%]" loop autoplay ref={animation}/> : ""}

                                    <Image src={snack.imageSrc.url} style={{height: "auto", width: "auto"}} priority={true} width={snack.imageWidthCustomSize != null ? snack.imageWidthCustomSize : 200 } height={snack.imageHeightCustomSize != null ? snack.imageHeightCustomSize : 300 } alt={"Image for " + snack.name}/>
                                </div>
                                <div className="flex justify-center w-[75%]">
                                    <p className="text-[#502314] font-sans text-sm italic text-center leading-none">{snack.description}</p>
                                </div>
                                <div className="flex w-2/4 justify-center">    
                                    <h3 className="text-[#502314] font-semibold text-2xl text-center">R${snack.price.toFixed(2)}</h3>
                                </div>
                                <div className="flex w-2/4 justify-center">
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
                                        setDelay();
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