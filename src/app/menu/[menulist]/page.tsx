'use client'

import GET_SNACKS from "@/queries/snacks";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Suspense, use, useEffect } from "react";
import Loading from "@/components/loading";
import { ApolloError } from "@apollo/client";
import GET_NEWESTSNACKS from "@/queries/newestsnacks";
import { usePathname } from "next/navigation";
import Image from 'next/image';


import 'swiper/scss';
import SnackSwiper from "@/components/SnackSwiper";
import { useBagStore } from "@/store/BagStore";


interface DataProps {
    
        id: string;
        name: string;
        imageSrc: {
            url: string;
        }
        isNew: boolean;
        description: string;
        price: number;
        itemList: [itemListProps]
    
}

interface itemListProps {
    name: string;
    imageSrc: {
        url: string;
    }
}

interface QueryProps {
    snacks: DataProps[];
    error: ApolloError | undefined;
}


export default function MenuList(props: any) {
    const params : {menulist: string}  = use(props.params);


    const selectedCategory = params.menulist;
    const pathname = usePathname();
    const setCurrent = useBagStore(state => state.setCurrentSnack)
    const QUERY = pathname === '/menu/Lan%C3%A7amentos' ? GET_NEWESTSNACKS : GET_SNACKS;
    const { error, data } = useSuspenseQuery<QueryProps>(QUERY, {variables: {selectedCategory}, fetchPolicy: "network-only"});

    useEffect(() => {
        setCurrent(data.snacks[0]);
    }, [data]);

    return (
        <Suspense fallback={<Loading/>}>
         {error ? <div className="flex justify-center flex-col items-center min-h-[80vh] w-full">
                <Image src="/images/secret-logo.png" width={120} height={120} alt="error-logo"></Image>
                <h4 className="text-caveirito italic text-center w-3/4 mt-6">Nosso cardápio no momento está indisponível, tente novamente mais tarde.</h4>
                </div> :  
         data.snacks.length >= 1 ? 
            <div className="h-auto md:h-[90vh] sm:h-[100vh] bg-white">
                    <SnackSwiper snacks={data.snacks}/>
            </div> : 
            <div className="flex justify-center items-center min-h-[100vh] w-full"><h4 className="text-caveirito italic">Não há itens disponíveis.</h4></div> }
            
           
            
        </Suspense>
    );
}