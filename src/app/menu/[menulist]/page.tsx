'use client'

import GET_SNACKS from "@/queries/snacks";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Carousel } from '@mantine/carousel';
import Image from "next/image";

export default function MenuList({params} : any) {
    
    const selectedCategory = params.menulist;
    const { error, data } = useSuspenseQuery(GET_SNACKS, {variables: {selectedCategory}})
    
    return (
        <div className="h-[72vh] bg-white">
            <Carousel withIndicators withControls height="100%" style={{ flex: 1 }}>
                {data.snacks.map((snack) => {
                    console.log(snack)
                    return (
                    <Carousel.Slide className="flex flex-col justify-center items-center" key={snack.id}>
                        <div className="flex my-4 space-x-4">
                            {snack.logoSrc ? <Image src={snack.logoSrc.url} width={72} height={72} alt={"Primary logo for " + snack.name}/> : ""}
                            {snack.secondaryLogoSrc ? <Image src={snack.secondaryLogoSrc.url} width={72} height={72} alt={"Secondary logo for " + snack.name}/> : ""}
                        </div>
                        <div className="flex text-2xl font-semibold text-[#502314]">{snack.name}</div>
                        <div className="flex w-3/4 justify-center">
                            <Image src={snack.imageSrc.url} width={300} height={300} alt={"Image for " + snack.name}/>
                        </div>
                        <div className="flex w-[90%]">
                            <p className="text-[#502314] text-lg my-2 text-center">{snack.description}</p>
                        </div>
                        <div className="flex w-2/4 justify-center">
                            <h3 className="text-[#502314] font-semibold text-2xl text-center">R${snack.price.toFixed(2)}</h3>
                        </div>
                </Carousel.Slide>
                    )
                })}
                
            </Carousel>
      </div>
    );
}