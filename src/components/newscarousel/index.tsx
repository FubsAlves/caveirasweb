"use client";
import GET_CAROUSELNEWS from '@/queries/carouselnews';
import { ApolloError } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Image from 'next/image';
interface DataProps {
  id: string;
  image: {
    url: string;
  }
}

interface NewsDataProps {
  newss: DataProps[];
  error: ApolloError;
}

export default function NewsCarousel() {
  
  const { error, data } = useSuspenseQuery<NewsDataProps>(GET_CAROUSELNEWS);
  
  return (
    <div className='w-[100vw] h-[25vh]'>
        <Carousel withIndicators withControls height="100%" style={{ flex: 1 }}>
            {data.newss.map((news: DataProps) => {
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
