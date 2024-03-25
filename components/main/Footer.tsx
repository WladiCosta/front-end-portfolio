"use client"
import Link from "next/link";
import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "semantic-ui-react";

;

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Comunidades</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <Link href="https://github.com/WladiCosta" className="text-[15px] ml-[6px] z-20">Github</Link>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxInstagramLogo />
                        <Link href="https://www.instagram.com/wladimir.mcosta?igsh=MWZ3dDg1NGZibzBteA==" className="text-[15px] ml-[6px] z-20">Instagram</Link >    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <Link href="https://www.linkedin.com/in/wladimircosta-dev/" className="text-[15px] ml-[6px] z-20">Linkedin</Link>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start ">
                    <div className="font-bold text-[16px]">Contato</div>
                        
                        <Link href="https://wa.me/5551999633181" className=" text-[15px] ml-[6px] flex flex-row cursor-pointer z-[100]">
                        <FaWhatsapp /><Button className="ml-[6px] mt-[-3px]">WhatsApp</Button>
                        </Link>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Wladimir Costa Dev Front-End. Todos Direitos Reservados.
            </div>
        </div>
    </div>
  )
}

export default Footer