import React, { FC } from 'react'

interface Props {
    placeholder? : string;
    name         : string;
    type         : 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'date' | 'time' | 'datetime-local';
    register     : any;
    className?   : string;
    validate?    : any;
    err          : boolean;
    errMessage?  : string;
    options?     : any;
    [key: string]: any;
}

export const MyInput: FC<Props> = ({ placeholder, name, type, register, validate, err, options, errMessage, ...resto}) => {
    return (
        <div className={`md:mr-1 border-2 mt-2 md:mt-0 ${err ? 'border-red-500' : 'border-secondary'} rounded-md h-9 w-52`}>
            <input
                { ...resto }
                {...register(name, options)}
                className='w-full h-full pl-2 outline-none bg-transparent border-0 text-white'
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}
