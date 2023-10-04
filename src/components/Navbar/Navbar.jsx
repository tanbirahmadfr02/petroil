import React, { useState } from 'react'
import logo from '../../assets/navLogo.png'
import {AiOutlineBars} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'

function Navbar() {
const [show, setShow] = useState(false);
const handleClick = () => {
setShow(!show)
}
return (
<div className='bg-primary py-[30px]'>
    <div className='max-w-container mx-auto px-2.5 md:px-0'>
        <div className='flex justify-between items-center'>
            <div className='md:w-1/4'>
                <img className='w-[150px] md:w-auto' src={logo} alt="" />
            </div>
            <div className='flex justify-end md:w-3/4'>
                <div className='md:hidden text-white text-2xl cursor-pointer' onClick={handleClick}>{
                    show == true ?
                    <RxCross2 /> :
                    <AiOutlineBars />
                    }</div>
                <div>
                    <ul className={`md:flex md:justify-end bg-[#00664e] md:bg-transparent md:gap-x-12 absolute md:static
                        top-[-170px] left-0 w-full text-center pb-[30px] md:pb-0 duration-500 ${show
                        ? 'top-[225px] opacity-100' : 'top-[-245px] opacity-0 md:opacity-100' }`}>
                        <li className='mb-2 md:mb-0'>
                            <a href="#" className='font-Poppins font-semibold text-base text-white'>Home</a>
                        </li>
                        <li className='mb-2 md:mb-0'>
                            <a href="#" className='font-Poppins font-semibold text-base text-white'>About</a>
                        </li>
                        <li className='mb-2 md:mb-0'>
                            <a href="#" className='font-Poppins font-semibold text-base text-white'>Services</a>
                        </li>
                        <li className='mb-2 md:mb-0'>
                            <a href="#" className='font-Poppins font-semibold text-base text-white'>Gallery</a>
                        </li>
                        <li>
                            <a href="#" className='font-Poppins font-semibold text-base text-white'>Blog</a>
                        </li>
                        <li className='mt-[30px] md:mt-0'>
                            <a href="#"
                                className='font-Poppins font-semibold text-base text-white md:ml-6 py-3.5 px-8 border-2 border-white duration-500 hover:bg-[#123e33]'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Navbar