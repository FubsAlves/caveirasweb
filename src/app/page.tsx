"use client"

import NewsCarousel from "@/components/newscarousel";
import GET_CAROUSELNEWS from "@/queries/carouselnews";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

export default function Home() {
  
  



  const { error, data } = useSuspenseQuery(GET_CAROUSELNEWS);
  
  return (
    <>

      <NewsCarousel newsData={data}/>
      <div className='w-[95vw] h-[35vh] mx-auto my-2 bg-slate-700'>

      </div>

      <div className='w-[95vw] h-[35vh] mx-auto my-2 bg-cyan-400'>
        
      </div>



    </>
  );
}
