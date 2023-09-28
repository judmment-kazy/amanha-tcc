"use client"

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/pagination';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Slider() {
  return (
    <main className="w-full max-w-[1290px] flex items-center justify-center">
      <Swiper
        id='mySlider'
        className="mySwiper"
        loop={true}
        mousewheel={true}
        slidesPerView={1}
        centeredSlides={true}
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
          910: { slidesPerView: 2 },
          1430: { slidesPerView: 3 },
        }}
        modules={[Mousewheel, Pagination, Autoplay]}>
        {[
          ['/cone_pacoca.png', 'Cone de Paçoca', "Delicioso cone trufado de sabor irresistível de paçoca, uma combinação perfeita de texturas e sabores que encantará seu paladar.", "10.00"],
          ['/cone_confete.png', 'Cone de Confete', "Divertido cone trufado repleto de confeitos coloridos, uma experiência alegre e saborosa.", "10.00"],
          ['/cone_dois_amores.png', 'Cone de Dois Amores', "Delicioso cone trufado harmonizando chocolate preto e branco, uma fusão perfeita de sabores.", "10.00"],
          ['/cone_ninho_nutella.png', 'Cone de Ninho com Nutella', "Irresistível cone trufado cremoso com Nutella e creme de leite Ninho, uma tentação inigualável.", "12.00"],
          ['/cone_oreo.png', 'Cone de Oreo', "Um apetitoso cone trufado contendo um sabor inconfundível da bolacha Oreo, uma verdadeira delícia.", "10.00"],
          ['/cone_banana.png', 'Cone de Banana', "Divertido cone trufado repleto de confeitos coloridos, uma experiência alegre e saborosa.", "10.00"],
        ].map(([url, text, desc, preco], index) => (
          <SwiperSlide key={index} className='max-w-[400px]'>
            <section className="w-full max-w-[400px] h-[500px] flex flex-col items-center justify-center gap-4 drop-shadow-3xl bg-gradient-to-t from-cianinho to-rosinha rounded-2xl select-none cursor-grab dark:from-DarkMenuColor dark:to-DarkMenuColor">
              <AlertDialog>
                <AlertDialogTrigger className='flex flex-col items-center justify-between gap-12'>
                  <div>
                    <Image src={url} width={200} height={200} alt={text} className='w-[200px] h-[200px] sm:w-[290px] sm:h-[290px] rounded-[40%] border-4 border-black' />
                  </div>
                  <div>
                    <p className="text-center text-3xl xs:text-3xl tracking-tighter">
                      {text}
                    </p>
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className='border-rosinha border-4 bg-gray-100 dark:bg-slate-800 dark:border-cianinho'>
                  <div className='text-center flex flex-col justify-center items-center select-none'>
                    <AlertDialogCancel className='absolute top-4 right-4 text-2xl font-sans hover:scale-[1.05] transition-transform'>X</AlertDialogCancel>
                    <Image src={url} width={200} height={200} alt={text} className='w-[200px] h-[200px] sm:w-[290px] sm:h-[290px] rounded-[100%] border-4 border-rosinha dark:border-cianinho' />
                    <AlertDialogTitle className='text-3xl font-sans'>{text}</AlertDialogTitle>
                    <AlertDialogDescription className='text-xl'>{desc}</AlertDialogDescription>
                    <AlertDialogDescription className='text-3xl text-cyan-300'>R$: {preco}</AlertDialogDescription>
                    <button className="gap-[1.5rem] flex flex-wrap mt-4 justify-center flex-grow bg-[linear-gradient(144deg,#AF40FF,#5B42F3_50%,#00DDEB)] shadow-[rgba(151,65,252,0.2)_0_15px_30px_-5px] box-border text-white items-center text-xl w-[90%] min-w-[140px] no-underline select-none touch-manipulation whitespace-nowrap cursor-pointer p-[3px] rounded-lg border-0"><a href="#" className='bg-[rgb(5,6,45)] w-full h-full transition-[300ms] px-6 py-4 rounded-md hover:bg-transparent'>Comprar</a></button>
                    <button className="gap-[1.5rem] flex flex-wrap mt-4 justify-center flex-grow bg-[linear-gradient(144deg,#AF40FF,#5B42F3_50%,#00DDEB)] shadow-[rgba(151,65,252,0.2)_0_15px_30px_-5px] box-border text-white items-center text-xl w-[90%] min-w-[140px] no-underline select-none touch-manipulation whitespace-nowrap cursor-pointer p-[3px] rounded-lg border-0"><a href="#" className="bg-[rgb(5,6,45)] w-full h-full transition-[300ms] px-6 py-4 rounded-md hover:bg-transparent">Adicionar ao carrinho</a></button>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  )
}