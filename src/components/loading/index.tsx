"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";
import Image from "next/image";

export default function Loading() {
   

    const animation = useRef(null);

    return (   
        
        <div className="flex flex-col w-[100vw] h-[75vh] bg-white justify-center items-center">
            <Image src="/images/caveirito.png" alt="caveirito" width={120} height={120} quality={100}/>   
            <h3 className="font-semibold text-2xl text-[#B71105]">Carregando...</h3>
        </div>
    );
}