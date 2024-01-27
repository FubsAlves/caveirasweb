"use client";
import GET_NEWS from '@/queries/news';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Image from 'next/image';

export default function News() {
  
  const { error, data } = useSuspenseQuery(GET_NEWS);

  return (
    <div className='flex flex-col w-full h-auto mb-8'>
      {data.newss.map((news : any) => {
        return (
          <div className='w-[100vw] h-[24vh] my-4' key={news.id}>
                <Image className="w-full h-auto" src={news.image.url} alt={'News for ' + news.id} width={500} height={500}/>
          </div>
        )
      })}
    </div>
  )
}