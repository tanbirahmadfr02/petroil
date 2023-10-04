import React from 'react'

function Banner() {
return (
<div className='bg-banner bg-cover bg-center bg-no-repeat'>
  <div className='bg-blackRgb py-32 md:py-64'>
    <div className='max-w-container mx-auto px-2.5 md:px-0'>
      <h1 className='font-poppins font-bold text-white text-[29px] md:text-[64px] lg:w-[841px] mb-[31px]'>We exist since
        1975 on the oil and gas industry.</h1>
      <div className='py-[13px] px-[40px] bg-primary inline-block hover:bg-[#00664e] duration-500'>
        <a className='font-poppins font-semibold text-white text-4 uppercase' href="#">learn more</a>
      </div>
    </div>
  </div>
</div>
)
}

export default Banner