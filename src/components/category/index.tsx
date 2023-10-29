"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import CategoryCard from "./categorycard";
import GET_CATEGORIES from "@/queries/categories";

export default function Category() {
    
    const { error, data } = useSuspenseQuery(GET_CATEGORIES)
    
    return(
        
        <div className="flex flex-row flex-wrap w-[100vw] justify-evenly">
            {data ? (
                data.categories.map((category) : any => {
                    return <CategoryCard key={category.id} name={category.name} imageUrl={category.snackImage.url}/>
                })
            ) : (
                <div>A</div>
            )}
            
        </div>
    );
}