"use client"
import React from 'react'
import Image from "next/image";
import { Socials } from '@/constants';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#0300147] backdrop-blur-md z-50 px-10'>
        <div className='w-auto ml-[-45px] sm:w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href="#about me" className='h-auto w-auto flex flex-row items-center'>
                <Image 
                src="/NavLogo.png"
                alt="Logo"
                height={70}
                width={70}
                className='cursor-pointer hover:animate-slowspin'
                />

                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>Wlad Dev</span>
            </a>
            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#about-me" className='cursor-pointer text-[13px] sm:text-[16px] '>Inicio</a>
                    <a href="#skills" className='cursor-pointer text-[13px] sm:text-[16px]'>Skills</a>
                    <a href="#projects" className='cursor-pointer text-[13px] sm:text-[16px]'>Projetos</a>
                </div>
            </div>
            <div className='flex flex-row gap-3'>
            {Socials.map((social, index) => (
                <div key={index}>
                <Link href={social.link}>
                    <Image 
                    src={social.src}
                    alt={social.name}
                    width={social.width}
                    height={social.heigth}
                    />
                </Link>
                </div>
            ))}
            </div>

        </div>
    </div>
  )
}

export default Navbar