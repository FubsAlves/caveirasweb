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
    
    const { data, error } = useSuspenseQuery<QueryProps>(GET_CATEGORIES, {fetchPolicy: 'network-only'});

    return (
        
            <div className="flex md:grid md:grid-cols-4 flex-row flex-wrap w-[100vw] h-auto md:h-[auto] md:min-h-[80vh] justify-evenly md:content-center md:justify-items-center mt-4 mb-16"> 
                {data.categories.map((category: any) => {
                    return <CategoryCard key={category.id} name={category.name} imageUrl={category.snackImage.url}/>
                })}
            </div>
         
    );
}