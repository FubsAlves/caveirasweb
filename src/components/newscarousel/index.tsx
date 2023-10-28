"use client";
import Image from 'next/image';

const breakPointsList = [
  
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];


export default function NewsCarousel(newsData: any) {
  return (
    <></>
  )
}






// PARA SER IMPLEMENTADO EM ÚLTIMO CASO




/* import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; */




/* export const responsive = {


  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}; */

{/* <Carousel
      className='w-[95vw] h-[30vh] mx-auto my-2'
      containerClass='rounded-lg'
      autoPlay={true}
      autoPlaySpeed={4000}
      responsive={responsive} ssr={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {newsData.newsData.newss.map((news: any, index: number) => {
        return(
          <div className='w-full h-full' key={news.id}>
            <Image src={news.image.url} style={{height: 'auto', width: 'auto'}} height={253} width={370} alt={"Noticia " + index} quality={100}/>
        </div>
        );
        
      })}
    </Carousel> */}