"use client";

import { useQuery, useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import CategoryCard from "./categorycard";
import GET_CATEGORIES from "@/queries/categories";
import Loading from "../loading";

export default function Category() {
    
    const { loading ,error, data } = useQuery(GET_CATEGORIES)
    
    return (
        loading ? (
            <div>Carregando</div>
        ) : (
            <div>Carregou</div>
        )
        
        
    );
}


{/* <div className="flex flex-row flex-wrap w-[100vw] justify-evenly">
    
    {data ? (
        data.categories.map((category) : any => {
            return <CategoryCard key={category.id} name={category.name} imageUrl={category.snackImage.url}/>
        })
    ) : (
        <div>A</div>
    )}

</div> */}