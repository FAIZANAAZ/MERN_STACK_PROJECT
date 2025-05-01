import React from 'react'

const Header = () => {
  return (
    <div className="  w-full ">
    {/* top div */}
    <div className="flex px-[475.45px] space-x-[194.11px] py-[16px] flex-col bg-[#634C9F]  items-center justify-center ">
    <p className=''>
    FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
    </p>
    <div className='space-x-[13.6]'>
<p>
Until the end of the sale:
</p>
<div className='justify-center items-center flex space-x-[3.5px] text-white'>
   <h3 className='font-bold'>
   47
   </h3>
   <p>
    Days
   </p>
   <h3 className='font-bold'>
   06
   </h3>
   <p>
    Hours
   </p>
   <h3 className='font-bold'>
    57
   </h3>
   <p>
minutes
   </p>
    <h3 className='font-bold'>
     08
    </h3>
    <p>
    Seconds
    </p>
</div>
    </div>
    </div>
    {/* 2nd div */}

   </div>
  )
}

export default Header