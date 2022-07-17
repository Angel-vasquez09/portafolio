import React from 'react';
import { LogoLg, MyInput, Portfolio } from '../components';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

type FormData = {
    nombres  : string;
    apellidos: string;
    email    : string;
    telefono : string;
    mensaje  : string;
}
interface DataMail {
    from   : string;
    text   : string;
    html   : string;
}
const send = async (data: DataMail) => {
    const response = await fetch('/api/contactame',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const { ok } = await response.json();

    return ok;

}

const Contactame = () => {

    const { push, asPath } = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: "all"
    });

    const onSubmit = async({ nombres, apellidos, email, telefono, mensaje }: FormData) => {
        const data = {
            from   : email,
            subject: 'Contacto',
            text   : nombres +' '+ apellidos,
            html   : `
                <h1>Hola Luis Angel</h1>
                <p style={{ padding: '5px'}}>${mensaje}</p>
                <h3><strong>Contactame</strong>: ${telefono}</h3>
            `
        }
        const res = await send(data);
        if(!res){
            alert('Error al enviar el mensaje, intentelo nuevamente');
        }
        push('/enviado');

    }

    return (
        <Portfolio title={'Contactame'} description={'Si quieres trabajar conmigo, enviame un correo'}>
            <div className='h-screen w-full flex justify-center items-center pt-20 md:pt-14 lg:pt-0'>
                <div className='z-40 w-full h-full md:w-[80%] lg:w-[50%] md:h-[80%] flex flex-col items-center shadow-2xl md:border md:border-[#222a3c]  rounded-lg md:backdrop-blur-sm md:bg-transparent/30'>
                    <div className='hidden md:flex md:w-20 lg:w-36 md:h-20 lg:h-36'>
                        <LogoLg />
                    </div>
                    <h1 className='md:hidden text-bold text-5xl text-secondary'>CONTACTAME</h1>
                    <form className='md:mt-5 h-full flex flex-col justify-center' onSubmit={ handleSubmit(onSubmit) } noValidate>
                        <div className='flex flex-col md:flex-row' >
                            <MyInput
                                placeholder='Nombres'
                                options={{
                                    required: "Este campo es obligatorio"
                                }}
                                name={'nombres'}
                                type={'text'}
                                register={register}
                                err={!!errors.nombres}
                            />
                            <MyInput
                                placeholder='Apellidos'
                                options={{
                                    required: "Este campo es obligatorio"
                                }}
                                name={'apellidos'}
                                type={'text'}
                                register={register}
                                err={!!errors.apellidos}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row md:mt-3'>
                            <MyInput
                                placeholder='Email'
                                options={{
                                    required: "Este campo es obligatorio"
                                }}
                                name={'email'}
                                type={'email'}
                                register={register}
                                err={!!errors.email}
                            />
                            <MyInput
                                placeholder='Telefono'
                                options={{
                                    required: "Este campo es obligatorio"
                                }}
                                name={'telefono'}
                                type={'text'}
                                register={register}
                                err={!!errors.telefono}
                            />
                        </div>
                        <div className={`border-2 ${!!errors.mensaje ? 'border-red-500': 'border-secondary'} rounded-md mt-3`}>
                            <textarea
                                {...register("mensaje",{
                                    required: "Este campo es obligatorio"
                                })}
                                placeholder="Escribe tu mensaje..."
                                defaultValue=""
                                className='w-full outline-none bg-transparent text-white pl-2 pt-2'
                                >
                            </textarea>
                        </div>
                        <div className='text-center mt-3'>
                            <button type='submit' className='bg-secondary border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-secondary hover:text-secondary px-4 py-3 text-primary text-bold rounded-xl'>¡Vamos!</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='absolute bottom-0 left-4 blur-[135px] w-[30%] h-[30%]  rounded-full bg-secondary'></div>
            <div className='absolute top-5 right-5 blur-[135px] md:w-[30%] md:h-[30%]  rounded-full bg-secondary'></div>
        </Portfolio>
    )
}

export default Contactame