"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";

export default function Loading() {
   

    const animation = useRef(null);

    return (   
        
        <div className="flex flex-col w-[100vw] h-[75vh] bg-white justify-center items-center">
            <Player src="/animation/loading.json" loop autoplay ref={animation}/>
            <h3 className="font-semibold text-2xl text-[#B71105]">Carregando...</h3>
            
        </div>
    );
}