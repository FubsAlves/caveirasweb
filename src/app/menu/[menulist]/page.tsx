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
                <Carousel.Slide className="flex justify-center">
                   <div className="flex flex-col">
                        <div className="w-full flex flex-row my-4">
                                <div className="w-1/4 flex items-center justify-center">
                                    <Image src="https://media.graphassets.com/yUtZbYR5T0u1HnwF5iR5?_gl=1*15lugb7*_ga*MjAxNDYyNjMzMy4xNzA1MjE2MTIx*_ga_G6FYGSYGZ4*MTcwNTI4ODc3NC4zLjAuMTcwNTI4ODc3NC42MC4wLjA." alt="tests2" width={64} height={64}/>  
                                </div>
                                <div className="w-2/4 flex items-center justify-center text-[#502314] text-xl font-semibold">Cb Melt Bacon</div>
                                <div className="w-1/4 flex items-center justify-center"><Image src="https://media.graphassets.com/yUtZbYR5T0u1HnwF5iR5?_gl=1*15lugb7*_ga*MjAxNDYyNjMzMy4xNzA1MjE2MTIx*_ga_G6FYGSYGZ4*MTcwNTI4ODc3NC4zLjAuMTcwNTI4ODc3NC42MC4wLjA." alt="tests3" width={64} height={64}/></div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src="https://media.graphassets.com/73nAfiHeTOGIsiBPWj3a?_gl=1*1e9k6rr*_ga*MjAxNDYyNjMzMy4xNzA1MjE2MTIx*_ga_G6FYGSYGZ4*MTcwNTI4ODc3NC4zLjAuMTcwNTI4ODc3NC42MC4wLjA." alt="tests5" width={200} height={200}></Image>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-sm text-center text-[#502314] mt-2">Um hambúrguer (100% carne bovina), queijo sabor emental, molho barbecue (molho não emulsionado sabor barbecue), fatias de bacon, tomate, alface americana, cebola crispy, molho tasty (molho emulsionado sabor carne grelhada) e pão com gergelim.</p>
                            <h3 className="text-2xl text-center text-[#502314] font-semibold mt-2">R$25,00</h3>
                        </div>
                   </div>
                </Carousel.Slide>
                <Carousel.Slide className="flex justify-center">
                  B
                </Carousel.Slide>
                <Carousel.Slide className="flex justify-center">C</Carousel.Slide>
                
            </Carousel>
      </div>
    );
}