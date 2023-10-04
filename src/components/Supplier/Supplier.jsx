import React from 'react'
import supply1 from '../../assets/supply1.png'
import supply2 from '../../assets/supply2.png'
import supply3 from '../../assets/supply3.png'
import supply4 from '../../assets/supply4.png'

export default function Supplier() {
return (
<div>
    <div className='max-w-container mx-auto px-2.5 md:px-0'>
        <div className='md:flex md:items-center pt-[50px] py-[50px] md:pt-[78px] md:pb-[100px]'>
            <div className='md:w-5/12'>
                <h2
                    className='font-poppins font-bold text text-[28px] mb-[14px] md:mb-0 md:text-5xl text-black w-[289px]'>
                    The biggest
                    supplier on
                    the country</h2>
            </div>
            <div className='md:w-7/12'>
                <p className='font-poppins font-semibold text-base text-[#6C6C6C]'>It is a long established fact that a
                    reader will be distracted by the readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
            </div>
        </div>
    </div>
    <div className='md:flex md:justify-between md:gap-x-[30px] mx-auto'>
        <div className='w-auto mb-[20px] md:mb-0'>
            <img className='mx-auto' src={supply1} alt="image" />
        </div>
        <div className='w-auto mb-[20px] md:mb-0'>
            <img className='mx-auto' src={supply2} alt="image" />
        </div>
        <div className='w-auto mb-[20px] md:mb-0'>
            <img className='mx-auto' src={supply3} alt="image" />
        </div>
        <div className='w-auto'>
            <img className='mx-auto' src={supply4} alt="image" />
        </div>
    </div>
</div>
)
}