"use client"

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay  } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/pagination';

export default function Slider(){
  return (
      <main className="w-full">
      <Swiper
        id='mySlider'
        className="mySwiper"
        loop={true}
        mousewheel={true}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={50}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 5000, // tempo de autoplay
          disableOnInteraction: false,
        }}
        pagination={{
            dynamicBullets: true,
        }}
        breakpoints={{
            910: { slidesPerView: 2},
            1430: { slidesPerView:3},
        }}
        modules={[Mousewheel, Pagination, Autoplay]}>
          {[
            ['/cone_pacoca.png', 'Cone de Paçoca'],
            ['/cone_confete.png', 'Cone de Confete'],
            ['/cone_dois_amores.png', 'Cone de Dois Amores'],
            ['/cone_ninho_nutella.png', 'Cone de Ninho com Nutella'],
            ['/cone_oreo.png', 'Cone de Oreo'],
            ['/cone_banana.png', 'Cone de Banana'],
          ].map(([url, text], index) => (
            <SwiperSlide key={index}>
              <section className="w-full h-[500px] flex flex-col items-center justify-around gap-4 drop-shadow-3xl bg-gradient-to-t from-cianinho to-rosinha rounded-2xl select-none cursor-grab dark:from-DarkMenuColor dark:to-DarkMenuColor">
                  <Image src={url} width={200} height={200} alt={text} className='w-[200px] h-[200px] sm:w-[290px] sm:h-[290px] rounded-[40%] border-4 border-black'/>
                  <p className="text-center text-2xl xs:text-3xl tracking-tighter">
                    {text}
                  </p>
              </section>
            </SwiperSlide>
          ))}
      </Swiper>
    </main>
    )
}