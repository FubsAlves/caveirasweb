"use client"

import NewsCarousel from "@/components/newscarousel";
import { Suspense } from "react";
import Loading from "@/components/loading";
import News from "@/components/news";


export default function Home() {
  
  return (
      <Suspense fallback={<Loading/>}>
          <NewsCarousel/>
          <News/>
          
      </Suspense>
  );
}
