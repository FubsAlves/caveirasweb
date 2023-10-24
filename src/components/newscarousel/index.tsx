"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const responsive = {
    
    
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
  };



export default function NewsCarousel() {
    return(
        <Carousel
            className='w-[95vw] h-[25vh] mx-auto my-2'
            containerClass='bg-lime-200 rounded-lg'
            autoPlay={true}
            autoPlaySpeed={2000}
            responsive={responsive} ssr={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </Carousel>
    )
}