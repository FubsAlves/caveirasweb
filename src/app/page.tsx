"use client"

import NewsCarousel from "@/components/newscarousel";
import { getClient } from "@/lib/client";
import GET_CAROUSELNEWS from "@/queries/carouselnews";
import GET_CATEGORIES from "@/queries/categories";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";


/* async function LoadData() {
  const { data } = await getClient().query({
    query: GET_CATEGORIES,
  })

  console.log(data);
} */


export default function Home() {
  
  /* await LoadData(); */
  const { error, data } = useSuspenseQuery(GET_CAROUSELNEWS);
  console.log(data);
  return (
    <>

      {/* <NewsCarousel newsData={data}/> */}
      <div className='w-[100vw] h-[35vh] bg-slate-700'>

      </div>

      <div className='w-[100vw] h-[35vh] bg-cyan-400'>
        
      </div>

      <div className='w-[100vw] h-[35vh] bg-green-500'>
        
      </div>



    </>
  );
}
