import React, { useEffect } from 'react';
import { Courgette } from 'next/font/google'
import Menu from '@/components/menu'
import { useTheme } from "next-themes"

const courgette = Courgette({
    subsets: ['latin'],
    weight: '400'
})

export function Header() {
    
    // const { setTheme } = useTheme()

    return (
        <div className='justify-center select-none'>
            <div className={courgette.className}>
                <header className="w-full m-auto flex justify-around items-center py-[1rem]select-none">
                    <div className='flex items-center gap-[10.7px]'>
                        {/* Logo */}
                        <img className="hidden md:flex w-[70px] pr-[-15px]" src="/logo pro.png" />
                        {/* Titulo */}
                        <a href='/'><h1 className='text-[1.6em] xs:text-[2em] sm:text-[3em] md:text-[2em] lg:text-[3em] xl:text-[4rem] dark:text-DarkTextColor'>Cones Trufadassos</h1></a>
                    </div>

                    {<nav>
                        <ul className="flex items-center gap-[1em] lg:gap-[1.7em] xl:gap-[2em]">
                            {/* sobre nosso projeto */}
                            <li>
                                <a className="hidden md:flex text-[1.5em] lg:text-[1.7em] xl:text-[2rem] text-slate-500 hover:text-red-500 cursor-pointer dark:text-DarkTextColor">Sobre</a>
                            </li>

                            {/* Nossos contatos */}
                            <li>
                                <a className="hidden md:flex text-[1.5em] lg:text-[1.7em] xl:text-[2rem] text-slate-500 hover:text-red-500 cursor-pointer dark:text-DarkTextColor" target="_blank" href="https://instagram.com/lg_trufadasso"> contato</a>
                            </li>

                            {/* linha de separação */}
                            <li className="hidden md:flex border-[1px] pt-[2.5em] border-slate-500 cursor-pointer"></li>

                            {/* icone de carrinho */}
                            <li className="hidden md:flex text-black text-[2.5rem] hover:text-red-500 cursor-pointer dark:text-DarkTextColor">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </li>

                            {/* mudar tema do site */}
                            {/* <li className="hidden md:flex text-black text-[2.5rem] hover:text-red-500 cursor-pointer">
                                <button onClick={() => setTheme("dark")} className='dark:text-[0]'>
                                    <i className="fa-solid fa-sun"></i>
                                </button>
                                <button onClick={() => setTheme("light")} className='text-[0px] dark:text-[45px] dark:flex'>
                                    <i className="fa-solid fa-moon text-DarkTextColor"></i>     
                                </button>
                            </li> */}

                            {/* Menu */}
                            <li>
                                <Menu />
                            </li>
                        </ul>
                    </nav>}
                </header>
                {/* Linha de Separação horizontal */}
                <span className="border-[1px] border-slate-500 absolute flex left-[50%] pr-[90%] translate-x-[-50%]"></span>
            </div></div>
    )
}