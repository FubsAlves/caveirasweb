'use client'

import GET_SNACKS from "@/queries/snacks";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default function MenuList({params} : any) {
    
    const selectedCategory = params.menulist;
    const { error, data } = useSuspenseQuery(GET_SNACKS, {variables: {selectedCategory}})
    
    return (
        <div>
            {/* <h1 onClick={() => {console.log(data)}}>cLIQUE</h1> */}
        </div>
    );
}