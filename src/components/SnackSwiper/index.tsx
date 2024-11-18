"use client";
import Image from "next/image";
import { useBagStore } from "@/store/BagStore";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useState } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import { usePathname } from "next/navigation";


interface DataProps {
    
    id: string;
    name: string;
    imageSrc: {
        url: string;
    }
    isNew: boolean;
    description: string;
    imageWidthCustomSize: number;
    imageHeightCustomSize: number;
    bagImageWidthCustomSize: number;
    bagImageHeightCustomSize: number;
    price: number;
    itemList: [itemListProps]

}

interface itemListProps {
name: string;
imageSrc: {
    url: string;
}

}

export default function SnackSwiper(snacks : DataProps[] | any) { 

    const setCurrent = useBagStore(state => state.setCurrentSnack)
    const animation = useRef(null);
    const pathname : string = usePathname();

    const [instance, setInstance] = useState<SwiperClass | null>(null);
    const swiperElRef = useRef(null);

    return (
        <Swiper id="SnackContainer" navigation={true} modules={[Navigation]} ref={swiperElRef} className="md:w-[65%]" onSwiper={setInstance} spaceBetween={0} slidesPerView={1} onSlideChange={() => {setCurrent(snacks.snacks[instance?.activeIndex])}} style={{'--swiper-navigation-color': `${pathname.includes('/menu/Chickens') ? '#f07100' : "#B71105"}`, '--swiper-navigation-size' : '33px'}}>
                    
                        {snacks.snacks.map((snack: DataProps) => {
                            return (
                            
                            <SwiperSlide key={snack.id} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                                <div className="flex text-2xl font-semibold text-[#502314] text-center mb-3 md:mb-24">{snack.name}</div>
                                <div className="flex justify-center relative w-[66%] mdm:w-[60%] sm:w-[75%] md:w-[50%] lg:w-[50%] msm:h-[30vh] mdm:h-[35vh] mlg:h-[29vh] md:h-[25vh] lg:h-[35vh]">
                                    {snack.isNew ? <Player src="/animation/newSnack.json" className="absolute top-[13%] msm:left-[-10%] mdm:left-[-8%] sm:left-[5%] md:left-[10%] lg:left-[-15%] w-14 h-14 md:w-20 md:h-20 md:top-[20%]" loop autoplay ref={animation}/> : ""}
                                    <Image className="" alt={"alt for " + snack.name} width={400} height={400} src={snack.imageSrc.url}/>
                                    
                                </div>
                               
                                <div className="flex justify-center w-[75%]">
                                    <p className="text-[#502314] font-sans text-sm md:text-base italic text-center leading-none mb-4">{snack.description}</p>
                                </div>
                                
                                {snack.itemList.length > 0 ?
                                
                                <div className="flex w-full h-32 mb-4">
                                
                                    
                                    <Swiper modules={[Autoplay]} autoplay={{delay: 2500, disableOnInteraction: false}} loop direction="horizontal" slidesPerView={snack.itemList.length > 3 ? 3 : 2 } nested={true} touchMoveStopPropagation touchReleaseOnEdges={true}>
                                  
                                        {snack.itemList.map((item : itemListProps) => {
                                            return (
                                                
                                                <SwiperSlide key={item.name} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: 130}}>
                                                    <Image src={item.imageSrc.url} width={80} height={80} alt={item.name} loading="lazy" />
                                                    <h3 className="relative text-[#502314] text-xs md:text-sm">{item.name}</h3>
                                                </SwiperSlide>
                                            )
                                        })}
                                    
                                    </Swiper>
                                    
                                </div> : <></> } 

                                <div className="flex w-2/4 justify-center text-[#502314] font-sm mb-2">    
                                    <sub className="flex items-center">R$</sub>
                                    <h3 className="flex items-center font-semibold text-2xl text-center">{snack.price.toFixed(2)}</h3>
                                </div>   
                                
                        </SwiperSlide>
                            )
                        })}
                        
                    </Swiper>
    )

}




