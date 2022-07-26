import { useRouter } from 'next/router';
import React from 'react'
import { Portfolio } from '../components'

const Proyectos = () => {

    const { push, asPath } = useRouter();

    return (
        <Portfolio title={'Proyectos'} description={'Conoce mi forma de trabajar y las herramientas que utilizo'}>
            <div className='pt-16 md:pt-0 w-full min-h-screen flex justify-center items-center'>
            <div className='absolute bottom-0 left-4 blur-[135px] w-[30%] h-[30%]  rounded-full bg-secondary'></div>
                <div className='w-full'>
                    <h1 className='text-3xl lg:text-7xl text-center text-bold text-secondary'>Proyectos</h1>
                    {/* LISTA DE PROYECTOS */}
                    <div className='w-full mt-4 flex flex-col md:flex-row justify-center items-center'>
                        {/* PROYECTOS */}

                        <div className='my-2 md:my-0 mx-1 w-[90%] md:w-96 h-80 grid grid-rows-5 border-2 border-secondary rounded-xl bg-transparent/30 backdrop-blur-sm'>
                            <div className='row-span-1 flex items-center pl-2'>
                                <h2 className='text-xl text-secondary text-bold'>Angel Peli</h2>
                            </div>
                            <div className="relative row-span-3 bg-[url('/imgs/proyecto1/img1.jpg')] bg-cover bg-left">
                                <div className='absolute bottom-1 left-1 flex'>
                                    <div className="bg-primary w-9 h-9 rounded-full border border-secondary mr-1 bg-[url('/tecno/react.png')] bg-cover"></div>
                                    <div className="bg-primary w-9 h-9 rounded-full border border-secondary mr-1 bg-[url('/tecno/query.svg')] bg-cover"></div>
                                    <div className="bg-primary w-9 h-9 rounded-full border border-secondary mr-1 bg-[url('/tecno/tail.png')] bg-cover"></div>
                                </div>
                            </div>
                            <div className='row-span-1 flex justify-center items-center'>
                                <button onClick={() => push('https://movies-vasquez.vercel.app/pelis/')} className='mr-1 px-3 font-bold rounded-md text-primary bg-secondary hover:bg-transparent border border-transparent hover:border hover:border-secondary hover:text-secondary'>
                                    <i className="fa-solid fa-tv"></i> Ver
                                </button>
                                <button onClick={() => push('https://github.com/Angel-vasquez09/Angel-Peli.git')} className='ml-1 px-3 font-bold rounded-md text-primary bg-secondary hover:bg-transparent border border-transparent hover:border hover:border-secondary hover:text-secondary'>
                                    <i className="fa-brands fa-github"></i> Code
                                </button>
                            </div>
                        </div>

                        <div className='my-2 md:my-0 mx-1 w-[90%] md:w-96 h-80 grid grid-rows-5 border-2 border-secondary rounded-xl bg-transparent/30 backdrop-blur-sm'>
                            <div className='row-span-1 flex items-center pl-2'>
                                <h2 className='text-xl text-secondary text-bold'>Tienda</h2>
                            </div>
                            <div className="relative row-span-3 bg-[url('/imgs/proyecto2/img1.jpg')] bg-cover bg-left">
                                <div className='absolute bottom-1 left-1 flex'>
                                    <div className="bg-primary w-9 h-9 rounded-full border border-secondary mr-1 bg-[url('/tecno/angular.png')] bg-cover"></div>
                                    <div className="bg-primary w-9 h-9 rounded-full border border-secondary mr-1 bg-[url('/tecno/tail.png')] bg-cover"></div>
                                </div>
                            </div>
                            <div className='row-span-1 flex justify-center items-center'>
                                <button onClick={() => push('https://tienda-angular.vercel.app/home')} className='mr-1 px-3 font-bold rounded-md text-primary bg-secondary hover:bg-transparent border border-transparent hover:border hover:border-secondary hover:text-secondary'>
                                    <i className="fa-solid fa-tv"></i> Ver
                                </button>
                                <button onClick={() => push('https://github.com/Angel-vasquez09/tienda-angular.git')} className='ml-1 px-3 font-bold rounded-md text-primary bg-secondary hover:bg-transparent border border-transparent hover:border hover:border-secondary hover:text-secondary'>
                                    <i className="fa-brands fa-github"></i> Code
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Portfolio>
    )
}

export default Proyectos