import React, { useState } from 'react'
import Link from 'next/link';
import { Logo } from './Logo';
import { useRouter } from 'next/router';

export const Navbar = () => {

    const [ toggle, setToggle ] = useState(false);
    const { push, asPath } = useRouter();


    return (
        <header className='h-16 w-full fixed z-50'>
            <nav className='w-full h-full flex justify-between items-center px-5'>

                <button onClick={() => setToggle(!toggle)} className='md:hidden flex text-2xl justify-center items-center text-secondary'>
                    <i className="fa-solid fa-bars"></i>
                </button>

                <button className='flex justify-center items-center'>
                    <Logo />
                </button>

                <ul className={`${toggle ? 'top-20' : '-top-[400px]'} absolute md:static transition-all duration-500 ease-in backdrop-blur-sm md:backdrop-blur-0 bg-transparent/30 md:bg-transparent  w-full md:w-auto h-auto py-5 left-0  font-bold md:flex md:items-center`}>
                    <li className='flex justify-center'>
                        <Link href="/">
                            <a className={`${asPath === '/' ? 'bg-secondary text-primary text-bold' : 'hover:text-secondary text-white'} w-[90%] md:w-auto text-center md:text-start px-3 py-2 rounded-3xl`}>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className='flex justify-center'>
                        <Link href="/acerca-de-mi">
                            <a className={`${asPath === '/acerca-de-mi' ? 'bg-secondary text-primary text-bold' : 'hover:text-secondary text-white'} w-[90%] md:w-auto text-center md:text-start  px-3 py-2 rounded-3xl`}>
                                Acerca de mi
                            </a>
                        </Link>
                    </li>
                    <li className='flex justify-center'>
                        <Link href="/proyectos">
                            <a className={`${asPath === '/proyectos' ? 'bg-secondary text-primary text-bold' : 'hover:text-secondary text-white'} w-[90%] md:w-auto text-center  px-3 py-2 rounded-3xl`}>
                                Proyectos
                            </a>
                        </Link>
                    </li>
                    <li className='flex justify-center'>
                        <Link href="/contactame">
                            <a className={`${asPath === '/contactame' ? 'bg-secondary text-primary text-bold' : 'hover:text-secondary text-white'} w-[90%] md:w-auto text-center px-3 py-2 rounded-3xl`}>
                                Contactame
                            </a>
                        </Link>
                    </li>
                </ul>

                <ul>
                    {/* <li>
                        <Link href="#">
                            <a className='text-3xl'><i className="fa-brands fa-github"></i></a>
                        </Link>
                    </li> */}
                </ul>

            </nav>
        </header>
    )
}
