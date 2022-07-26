import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Portfolio, Skill } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const { push, asPath } = useRouter();

  return (
    <Portfolio title={'Portfolio | Angel'} description={''} >
      <div className='h-screen flex flex-col-reverse md:flex-row'>

      {/* ANIMACION DE SKILLS */}
        <div className='relative h-3/4 md:h-screen w-full md:w-[80%] lg:w-[70%]'>
          {/* <div className='absolute bottom-10 blur-[175px] md:w-1/2 md:h-1/2  rounded-full bg-secondary'></div> */}
          <Skill />
        </div>

        {/*  */}
        {<div className='relative w-full h-1/4 mt-20 flex items-end  md:h-screen md:mt-0 md:absolute md:w-[60%] md:right-0 md:pb-7'>

            <div className='z-40 drop-shadow-2xl top-0 md:top-20 lg:top-40 left-0  md:left-10 md:flex flex-col justify-center md:backdrop-blur-xl md:bg-primary/30 w-full md:w-auto lg:w-4/5 h-auto md:h-36 lg:h-44 absolute md:border-[0.3px] md:border-[#353f4f] md:p-2 rounded-2xl'>
              <h2 className='text-xl text-center md:text-xl text-bold text-white '>HOLA MI NOMBRE ES</h2>
              <h1 className='text-5xl text-center md:text-5xl lg:text-6xl text-bold text-secondary '>LUIS ANGEL</h1>
              <h3 className='font-bold text-center text-white text-xs md:text-xs '>Desarollador de aplicaciones Web</h3>
            </div>

            <div className='absolute top-0 left-0 md:top-4 md:right-4 blur-[120px] md:blur-[175px] w-11/12 h-5/6 md:w-1/3 md:h-1/3 border rounded-full bg-secondary'></div>

            <div className='hidden md:flex md:flex-col md:items-end md:pr-5 pl-3 pb-3 relative w-full h-auto'>
              <h2 className='text-xs md:text-lg text-white font-bold'>Proyectos recien</h2>
              <div className='flex'>
                <div onClick={ () => push('https://movies-vasquez.vercel.app/pelis/')} className='mx-1 cursor-pointer border border-primary hover:border-secondary w-40 h-20 md:w-80 md:h-40 rounded-xl overflow-hidden'>
                  <Image
                    className=''
                    objectFit="cover" quality={100} width={350} height={190}
                    src={'/imgs/proyecto1/img1.jpg'} alt="img1"
                  />
                </div>
                <div onClick={ () => push('https://tienda-angular.vercel.app/home')} className='mx-1 cursor-pointer border border-primary hover:border-secondary w-40 h-20 md:w-80 md:h-40 rounded-xl overflow-hidden'>
                  <Image
                    className=''
                    objectFit="cover" quality={100} width={350} height={190}
                    src={'/imgs/proyecto2/img1.jpg'} alt="img1"
                  />
                </div>
              </div>
            </div>
        </div>}
      </div>
    </Portfolio>
  )
}

export default Home
