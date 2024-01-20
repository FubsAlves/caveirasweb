"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import CategoryCard from "./categorycard";
import GET_CATEGORIES from "@/queries/categories";
import { ApolloError } from "@apollo/client";


interface DataProps {
    categories : {
        id: string;
        name: string;
        snackImage: {
            url: string;
        }
    }
}

interface QueryProps {
    categories: DataProps[];
    error: ApolloError | undefined;
}

export default function Category() {
    
    const { data, error } = useSuspenseQuery<QueryProps>(GET_CATEGORIES);

    return (
        
            
            <div className="flex flex-row flex-wrap w-[100vw] justify-evenly"> 
                {data.categories.map((category: any) => {
                    return <CategoryCard key={category.id} name={category.name} imageUrl={category.snackImage.url}/>
                })}
            </div>
         
    );
}