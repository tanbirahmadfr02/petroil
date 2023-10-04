import React from 'react'
import about from '../../assets/about.png'

function About() {
return (
<div className=' py-[75px] md:py-[136px] bg-[#F0F0F0]'>
    <div className='max-w-container mx-auto px-2.5 md:px-0'>
        <div className='flex flex-wrap md:flex-nowrap'>
            <div className='md:w-5/12 py-[50px] px-[20px] md:py-[100px] md:pl-[74px] bg-primary'>
                <a className='font-poppins font-bold text-[28px] md:text-4xl text-white inline-block md:w-[262px]'
                    href="#">Learn more
                    about our company</a>
            </div>
            <div className='md:w-7/12'>
                <div className='relative'>
                    <img src={about} alt="" />
                    <div
                        className=' py-[10px] px-[30px] md:py-[13px] md:px-[40px] bg-white inline-block hover:bg-[#00664e] duration-500 absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] group'>
                        <a className='font-poppins font-semibold text-primary text-4 uppercase group-hover:text-white'
                            href="#">learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default About