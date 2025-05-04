
import React from 'react'
import { Button } from './ui/button'
import { CiHeart } from 'react-icons/ci'
import Image from 'next/image'
import { GiThreeLeaves } from 'react-icons/gi'
import { IoMdAdd } from 'react-icons/io'
import { FaRegStar } from 'react-icons/fa'

const EditorPick = () => {
  return (
   <div className='space-y-4'>
{/* top section */}
<div className='flex justify-between items-center '>
      
      <div className='flex  items-center  bg-[#D1D5DB] w-full'>
<h1 className='font-bold text-[18px]'>Editors Pick</h1>
<p className='text-[13px] ml-2 text-[#949ba7]'>New products with updated stocks.</p>
      </div>

  <Button className='bg-white p-4 text-[12px]font-bold text-black rounded-2xl'>View All</Button>    
    </div>
{/* grid section */}
<div className='grid grid-cols-[1fr_2fr_1fr_2fr] grid-rows-2  h-[500px] w-full'>


    {/* first */}
  <div className='bg-white row-span-2 p-[15px]'>
    <div className=''>
        <div className='flex justify-between items-center'>
            <Button className='bg-red-700 text-white font-bold p-2 text-[10px] '>75%</Button>
            <CiHeart size={26} />
            
        </div>
        <div>
            <Image src="/grid1.png" alt="list1" width={200} height={200} className='object-cover' />
        </div>
        <div className='flex justify-between gap-4 items-center'>
            <Button className='bg-gradient-to-r from-green-600 to-white-300    rounded-3xl text-black font-bold text-[10px]'><GiThreeLeaves />ORGANIC</Button>
            <div className='bg-[#634C9F] p-2 rounded-full'><IoMdAdd /> </div>
            
        </div>
    </div>

{/* buttom div */}
    <div className='mt-4'>
        <div className='flex items-center'>
            {[1, 2, 3,4,5].map((item,index) => (
                <FaRegStar color='#FACC15' />
                
            ))}
        </div>
        <div className='space-y-2'>
           <h3 className='text-black text-[14px] font-semibold'>
           100 Percent Apple Juice  64 fl oz
           Bottle</h3> 
           <p className='text-[12px] text-[#949ba7] font-normal'>
           Vivamus adipiscing nisl ut dolor
           malesuada tincidunt.malesuada tincidunt.
           </p>
        </div>
        <div className='flex gap-2 items-center'>
            <h3 className='text-[red] font-bold text-[22px]'>$0.55</h3>
            <p className='text-black text-[16px]'>$1.99</p>
        </div>


        <div className='border-t-2 gap-2 border-[#D1D5DB] pt-2 '>
            <p className='text-[12px] text-[#949ba7] font-normal'>
            This product is about to run out
            </p>
            <div className='h-[4px] w-full bg-gradient-to-r from-yellow-500 to-orange-600'></div>

            <div className='flex  gap-2 items-center'><p className='text-[12px] text-[#949ba7] font-normal'>available only:</p><span className='text-black'>23</span></div>
        </div>
    </div>

  </div>



  {/* second */}
  <div className='bg-green-500'>
  <div className='flex flex-col justify-between items- gap-2 p-4'>
    <div className='flex justify-between items-center w-full '>
      <Button className='bg-red-700 text-white font-bold p-2 text-[10px]'>11%</Button>
      <div>
        <CiHeart size={26} />
      </div>
    </div>
    <div className='flex justify-start items-center w-full'>
      <Image src="/grid1.png" alt="list1" width={110} height={200}  />
    </div>
    <div className='flex justify-between items-center w-full '>
      <Button className='bg-gradient-to-r from-green-600 to-white-300 rounded-3xl text-black font-bold text-[10px]'>
        <GiThreeLeaves /> COLD SALE
      </Button>
    </div>
    <div className='flex gap-4 items-center w-full '>
      {
        [87, 36, 57].map((item, index) => (
          <div key={index} className='flex items-center gap-2 border-1 border-[gray] text-black p-1 text-[12px] font-bold rounded-lg'>
            {item}
          </div>
        ))
      }
      <div className='flex items-center gap-2 border-1 border-[gray] text-black p-2 rounded-lg'>
        <span>:</span> 08
      </div>
      <div>
        <p className='text-[12px] text-[#949ba7] font-normal'>Remains until the end of the offer</p>
      </div>
    </div>
  </div>
</div>


  {/* third */}
  <div className='bg-white w-[170px] row-span-2 p-[15px]'>
    <div className=''>
        <div className='flex justify-between items-center'>
            <Button className='bg-red-700 text-white font-bold p-2 text-[10px] '>21%</Button>
            <CiHeart size={26} />
            
        </div>
        <div>
            <Image src="/grid3.png" alt="list1" width={200} height={200} className='object-cover' />
        </div>
        <div className='flex justify-between gap-4 items-center'>
            <Button className='bg-gradient-to-r from-blue-400 to-white-300    rounded-3xl text-[#1f8da0] font-bold text-[10px]'><GiThreeLeaves />COLD SALE</Button>
            <div className='bg-[#634C9F] p-2 rounded-full'><IoMdAdd /> </div>
            
        </div>
    </div>

{/* buttom div */}
    <div className='mt-4'>
        <div className='flex items-center'>
            {[1, 2, 3,4,5].map((item,index) => (
                <FaRegStar color='#FACC15' />
                
            ))}
        </div>
        <div className='space-y-2'>
           <h3 className='text-black text-[12px] font-semibold'>
           100 Percent Apple Juice  64 fl oz
           California Pizza Kitchen
           Margherita, Crispy Thin Crust…</h3> 
           <p className='text-[10px] text-[#949ba7] font-normal'>
           Vivamus adipiscing nisl ut dolor
           malesuada tincidunt.malesuada tincidunt.
           </p>
        </div>
        <div className='flex gap-2 items-center'>
            <h3 className='text-[red] font-bold text-[22px]'>$11.77</h3>
            <p className='text-black text-[16px]'>$14.77</p>
        </div>


        <div className='border-t-2 gap-2 border-[#D1D5DB] pt-2 '>
            <p className='text-[12px] text-[#949ba7] font-normal'>
            This product is about to run out
            </p>
            <div className='h-[4px] w-full bg-gradient-to-r from-yellow-500 to-orange-600'></div>

            <div className='flex  gap-2 items-center'><p className='text-[12px] text-[#949ba7] font-normal'>available only:</p><span className='text-black'>19</span></div>
        </div>
    </div>

  </div>


  {/* fourth */}
  <div className='bg-purple-500'></div>
  <div className='bg-pink-500'></div>
  <div className='bg-indigo-500'></div>
</div>


   </div>
  )
}

export default EditorPick
