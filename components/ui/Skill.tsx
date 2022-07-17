import Image from 'next/image'
import React from 'react'

export const Skill = () => {
    return (
        <div className='reltative w-full h-full flex justify-start md:items-end overflow-hidden'>

            <div className='overflow-hidden absolute flex justify-center items-center w-[90%] h-[90%] md:w-[80%] md:h-[100%]'>
                <Image
                    className='mix-blend-screen animate-circle border border-white'
                    objectFit="contain" quality={100} layout="fill" width={500} height={600}
                    src={'/imgs/circle2.png'} alt="img1"
                />
                <div className="absolute w-3/5 h-3/5 flex justify-center items-center">
                    <Image
                        className='mix-blend-screen animate-circle-reverse'
                        objectFit="contain" layout='fill'
                        quality={100} width={280} height={280}
                        src={'/imgs/circle1.png'} alt="img2"
                    />
                        <div className='absolute'>
                            <Image
                                className='mix-blend-screen animate-circle'
                                objectFit="cover"
                                quality={100} width={280} height={280}
                                src={'/imgs/circle0.png'} alt="img2"
                            />
                        </div>
                </div>
            </div>

        </div>
    )
}
