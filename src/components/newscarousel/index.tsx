"use client";
import GET_CAROUSELNEWS from '@/queries/carouselnews';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Image from 'next/image';

export default function NewsCarousel() {
  
  const { error, data } = useSuspenseQuery(GET_CAROUSELNEWS);
  
  return (
    <div className='w-[100vw] h-[25vh]'>
        <Carousel withIndicators withControls height="100%" style={{ flex: 1 }}>
            {data.newss.map((news: any) => {
              return (
                <CarouselSlide key={news.id}>
                    <Image className='w-full h-auto' src={news.image.url} alt={'News for ' + news.id} width={500} height={500}/>
                </CarouselSlide>
              )
            })}
        </Carousel>
    </div>
  )
}
