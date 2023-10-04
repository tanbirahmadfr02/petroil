import React from 'react'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'

function LogoSlider() {
return (
<div className=' py-[50px] md:py-[116px]'>
    <div className='max-w-container mx-auto px-2.5 md:px-0'>
        <div className='flex md:justify-between flex-wrap justify-center'>
            <div>
                <img src={logo1} alt="" />
            </div>
            <div>
                <img src={logo2} alt="" />
            </div>
            <div>
                <img src={logo3} alt="" />
            </div>
            <div>
                <img src={logo4} alt="" />
            </div>
        </div>
    </div>
</div>
)
}

export default LogoSlider