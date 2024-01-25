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
    const { error, data } = useSuspenseQuery<QueryProps>(QUERY, {variables: {selectedCategory}, fetchPolicy: "cache-and-network"});
    const animation = useRef(null);
    const addItem = useBagStore(state => state.addToBag);
    
    
    return (
        <Suspense fallback={<Loading/>}>
            <div className="h-auto mb-28 bg-white">
                <Carousel withIndicators withControls height="100%" style={{ flex: 1 }}>
                    {data.snacks.map((snack: any) => {
                        return (
                        <Carousel.Slide className="flex flex-col justify-center items-center" key={snack.id}>
                            <div className="flex my-4 space-x-4">
                                {snack.logoSrc ? <Image src={snack.logoSrc.url} style={{height: "auto", width: "auto"}} width={64} height={64} alt={"Primary logo for " + snack.name}/> : ""}
                                {snack.secondaryLogoSrc ? <Image src={snack.secondaryLogoSrc.url} style={{height: "auto", width: "auto"}} width={64} height={64} alt={"Secondary logo for " + snack.name}/> : ""}
                            </div>
                            <div className="flex text-2xl font-semibold text-[#502314]">{snack.name}</div>
                            <div className="flex w-3/4 justify-center">
                                {snack.isNew ? <Player src="/animation/newSnack.json" style={{position: "absolute", top: '28%', left: '8%', width: 55, height: 55 }} loop autoplay ref={animation}/> : ""}
                                <Image src={snack.imageSrc.url} style={{height: "auto", width: "auto"}} priority={true} width={300} height={300} alt={"Image for " + snack.name}/>
                            </div>
                            <div className="flex w-[75%] justify-center items-center">
                                <p className="text-[#502314] text-lg italic my-2 text-center leading-none">{snack.description}</p>
                            </div>
                            <div className="flex w-2/4 justify-center">
                                <h3 className="text-[#502314] font-semibold text-2xl text-center">R${snack.price.toFixed(2)}</h3>
                            </div>
                            <div className="flex w-2/4 justify-center">
                                <Button color="red" variant="filled" radius="md" onClick={() => {
                                    addItem({
                                        id: snack.id,
                                        name: snack.name,
                                        price: snack.price,
                                        quantity: 1,
                                        imageSrc: {
                                            url: snack.imageSrc.url,
                                        }
                                        

                                    })
                                }}>Adicionar</Button>
                            </div>
                    </Carousel.Slide>
                        )
                    })}
                    
                </Carousel>
        </div>
      </Suspense>
    );
}