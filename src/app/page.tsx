"use client"

import NewsCarousel from "@/components/newscarousel";
import { Suspense } from "react";
import Loading from "@/components/loading";
import News from "@/components/news";


export default function Home() {
  
  return (
      <Suspense fallback={<Loading/>}>
          <div className="w-full  md:min-h-[200vh]">
            <NewsCarousel/>
            <News/>
          </div>
          
      </Suspense>
  );
}
