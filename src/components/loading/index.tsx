"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
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

/* import { useRoute } from "@react-navigation/native";
import { Flex, Image, Spinner, Heading } from "native-base";

export default function Loading() {
  
  const route = useRoute();
  
  return (
    <Flex h="100%" justifyContent="center">
      {route.params && route.params.name === "Chickens" ? (
         <Image alignSelf="center"
         source={require("../../assets/images/chicken-caveirito.png")}
         alt="Chicken-Caveirito"
         w={200}
         h={200}
        />
      ) : 
      (
        <Image alignSelf="center"
        source={require("../../assets/images/caveirito.png")}
        alt="Caveirito"
        w={75}
        h={175}
      />
      )}
      
     
      <Flex flexDir="row" justifyContent="center">
        <Spinner color={route.params && route.params.name === "Chickens" ? 'chickens.100' : 'caveirito.100'} size="lg" mr={2}/>
        <Heading color={route.params && route.params.name === "Chickens" ? 'chickens.100' : 'caveirito.100'}>Carregando...</Heading>
      </Flex>    
    </Flex>
  )
} */