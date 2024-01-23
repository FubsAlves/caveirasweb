"use client";
import GET_NEWS from '@/queries/news';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Image from 'next/image';

export default function News() {
  
  const { error, data } = useSuspenseQuery(GET_NEWS);

  return (
    data.newss.map((news : any) => {
      return (
        <div className='w-[100vw] h-[23vh] my-4'>
              <Image className="w-full h-auto" src={news.image.url} alt={'News for ' + news.id} width={500} height={500}/>
        </div>
      )
    })
  )
}