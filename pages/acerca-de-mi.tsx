import React from 'react'
import { ImgAngel, Portfolio, Skill } from '../components'

const acercaMi = () => {
    return (
        <Portfolio title={'Acerca de mi'} description={'Conoce un poco sobre mi'}>
            <div className='h-screen flex'>

                <div className='relative z-40 flex justify-center items-center w-full md:w-1/2'>
                    <div>
                        <h1 className='text-3xl lg:text-7xl text-center text-bold text-secondary'>ACERCA DE MI</h1>
                        <p className='m-0 text-white text-center mt-3'>
                        Mi nombre es Luis Angel y soy <span className='text-secondary'>Diseñador de aplicacion web</span>. Mi misión es ayudar a <strong className='text-secondary'>EMPRENDEDORES AUTÓNOMOS</strong> y <strong className='text-secondary'>PEQUEÑAS EMPRESAS</strong>  a tener una web moderna, fresca y que siga los estandares internacionales para mejorar su imagen y sus ventas. ¡Entonces, qué!… ¿hablamos?
                        </p>
                    </div>
                </div>

                <div className={`absolute right-0 w-full md:w-[50%] h-screen bg-[url('/imgs/angel.png')] bg-cover`}>
                </div>
            </div>
        </Portfolio>
    )
}

export default acercaMi