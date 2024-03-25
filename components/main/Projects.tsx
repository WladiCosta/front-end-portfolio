import React from 'react'
import ProjectCards from '../sub/ProjectCards'
import Link from 'next/link'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col items-center justify-center py-20 mt-[-250px] sm:mt-[-75px]'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            Meus Projetos
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <Link href="https://github.com/WladiCosta/Moder-Bank-Website-React-App" className='z-[20] w-full h-full'>
            <ProjectCards
              src="/hoobank.png"
              title="Hoobank - Digital Bank"
              description="O Hoobank é um projeto de estudo que utiliza funcionalidades avançadas do Next.js 13, evidenciando meu compromisso com o aprimoramento profissional."
            />
          </Link>
          <Link href="https://github.com/WladiCosta/Pearson-Hardman" className='z-[20] w-full h-full'>
            <ProjectCards
              src="/pearson.png"
              title="Pearson Hardman"
              description="O Pearson é um projeto de estudos inspirado na série Suits, desenvolvido com HTML5, CSS3 e JS, demonstrando minha experiência em front-end."
            />
          </Link>
          <Link href="https://github.com/WladiCosta/front-end-portfolio" className='z-[20] w-full h-full'>
            <ProjectCards
              src="/space.png"
              title="Portfolio Espacial - Front End"
              description="Projeto de estudos e portfólio pessoal de Desenvolvedor Front-End, desenvolvido em Next.js 14 e Framer Motion, com um tema espacial futurista."
            />
         </Link>
        </div>
    </section>
  )
}

export default Projects