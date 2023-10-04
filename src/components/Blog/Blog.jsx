import React from 'react'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import {BiChevronRight} from 'react-icons/bi'

function Blog() {
return (
<div className='mt-[60px] pb-16 md:pt-[110px] md:pb-[162px] bg-[#F0F0F0]'>
    <div className='max-w-container mx-auto px-2.5 md:px-0'>
        <div className='md:flex md:justify-between'>
            <div className='relative w-auto mb-[20px] md:mb-0'>
                <img src={blog1} alt="image" />
                <div className='absolute top-0 left-0 bg-blackRgb h-full w-full px-[45px] pt-[50px] md:pt-[75px]'>
                    <h4 className='font-poppins font-bold text-2xl text-white mb-[52px] capitalize'>lorem ipsum dolor
                        sit amet consectetur
                        adipiscing elit sed do eiusmod.</h4>
                    <div className='py-[13px] px-[40px] bg-[#FFFFFF] inline-block hover:bg-primary duration-500 group'>
                        <a className='font-poppins font-semibold text-black duration-500 text-4 uppercase group-hover:text-white'
                            href="#">Read more</a>
                    </div>
                </div>
            </div>
            <div className='relative w-auto mb-[20px] md:mb-0'>
                <img src={blog2} alt="image" />
                <div className='absolute top-0 left-0 bg-blackRgb h-full w-full px-[45px] pt-[75px]'>
                    <h4 className='font-poppins font-bold text-2xl text-white mb-[52px] capitalize'>lorem ipsum dolor
                        sit amet consectetur
                        adipiscing elit sed do eiusmod.</h4>
                    <div className='py-[13px] px-[40px] bg-[#FFFFFF] inline-block hover:bg-primary duration-500 group'>
                        <a className='font-poppins font-semibold text-black text-4 uppercase group-hover:text-white duration-500'
                            href="#">Read more</a>
                    </div>
                </div>
            </div>
            <div className='relative w-auto'>
                <img src={blog3} alt="image" />
                <div className='absolute top-0 left-0 bg-blackRgb h-full w-full px-[45px] pt-[75px]'>
                    <h4 className='font-poppins font-bold text-2xl text-white mb-[52px] capitalize'>lorem ipsum dolor
                        sit amet consectetur
                        adipiscing elit sed do eiusmod.</h4>
                    <div className='py-[13px] px-[40px] bg-[#FFFFFF] inline-block hover:bg-primary duration-500 group'>
                        <a className='font-poppins font-semibold text-black text-4 uppercase group-hover:text-white duration-500'
                            href="#">Read more</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-end mt-[30px] flex items-center gap-x-1 justify-end'>
            <a className='text-end uppercase font-poppins text-base font-bold text-black' href="#">More from the
                blog</a>
            <a className='text-2xl' href="#">
                <BiChevronRight /></a>
        </div>
    </div>
</div>
)
}

export default Blog