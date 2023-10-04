import React from 'react'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'

function Service() {
return (
<div className='pt-7'>
    <div className='flex items-center flex-wrap'>
        <div className='md:w-1/2'>
            <div className='md:pr-[175px] md:pl-[225px]'>
                <h3 className='font-poppins font-bold text-black text-[30px] md:text-[64px]'>Our Services</h3>
                <p className='font-poppins font-medium text-[#6C6C6C] text-base mb-[20px] md:mb-0'>It is a long
                    established fact that
                    a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
        </div>
        <div className='md:w-1/2 relative mb-[20px] md:mb-0'>
            <img className='w-full' src={service1} alt="image" />
            <div
                className='bg-blackRgb w-full h-full absolute top-0 pt-[15px] pl-[10px] left-0 md:pt-[116px] md:pl-[80px] md:pr-[60px]'>
                <h4 className='font-poppins font-bold text-white text-2xl md:text-4xl'>Modern natural oil and gas
                    refineries.</h4>
                <div
                    className=' mt-[12px] md:mt-5 py-[10px] px-[30px] bg-primary inline-block hover:bg-[#00664e] duration-500'>
                    <a className='font-poppins font-semibold text-white text-4 uppercase' href="#">learn more</a>
                </div>
            </div>
        </div>
        <div className='md:w-1/2 relative mb-[20px] md:mb-0'>
            <img className='w-full' src={service2} alt="image" />
            <div
                className='bg-blackRgb w-full h-full absolute top-0 left-0 pt-[15px] pl-[10px] md:pt-[116px]  md:pl-[80px] md:pr-[60px]'>
                <h4 className='font-poppins font-bold text-white text-2xl md:text-4xl'>Modern natural oil and gas
                    refineries.</h4>
                <div
                    className='mt-[12px] md:mt-5 py-[10px] px-[30px] bg-primary inline-block hover:bg-[#00664e] duration-500'>
                    <a className='font-poppins font-semibold text-white text-4 uppercase' href="#">learn more</a>
                </div>
            </div>
        </div>
        <div className='md:w-1/2 relative'>
            <img className='w-full' src={service3} alt="image" />
            <div
                className='bg-blackRgb w-full h-full absolute top-0 left-0 pt-[15px] pl-[10px] md:pt-[116px]  md:pl-[80px] md:pr-[60px]'>
                <h4 className='font-poppins font-bold text-white text-2xl md:text-4xl'>Modern natural oil and gas
                    refineries.</h4>
                <div
                    className='mt-[12px] md:mt-5 py-[10px] px-[30px] bg-primary inline-block hover:bg-[#00664e] duration-500'>
                    <a className='font-poppins font-semibold text-white text-4 uppercase' href="#">learn more</a>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Service