import React from 'react'
import { Button } from './ui/button'
import { IoMdAdd } from 'react-icons/io'
import { FaRegStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import Image from 'next/image'
import { GiThreeLeaves } from 'react-icons/gi'
import { Countdown, StarRating } from './editorpick'


const products = [
    {
      name: "100 Percent Apple Juice",
      size: "64 oz Bottle",
      price: 0.50,
      originalPrice: 1.99,
      image: "/bseller1", // Image name updated
    },
    {
      name: "Simply Orange Pulp Free Juice",
      size: "59 oz",
      price: 2.45,
      originalPrice: 3.49,
      image: "/bseller2", // Image name updated
    },
    {
      name: "Real Plant-Powered Protein Shake",
      size: "Double Chocolate",
      price: 14.89,
      originalPrice: 17.99,
      image: "/bseller3", // Image name updated
    },
    {
      name: "Absolut Grapefruit Paloma Sparkling Vodka Cocktail",
      size: "9oz Can",
      price: 6.99,
      originalPrice: 8.49,
      image: "/bseller4", // Image name updated
    },
    {
      name: "Vitamineral Zero Sugar",
      size: "4 Bottle Pack",
      price: 4.89,
      originalPrice: 5.89,
      image: "/bseller5", // Image name updated
    },
    {
      name: "Vitamineral Zero Sugar",
      size: "12 Bottle Pack",
      price: 9.49,
      originalPrice: 11.99,
      image: "/bseller6", // Image name updated
    },
  ];
  

const BestSeller = () => {
  return (
    <div className='space-y-4 w-full max-w-[1400px] mx-auto px-4 md:px-6'>
       {/* top section - preserved exactly as original */}
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row sm:items-center bg-[#D1D5DB] w-full p-2 sm:p-0">
          <h1 className="font-bold text-[18px]">BEST SELLERS</h1>
          <p className="text-[13px] sm:ml-2 text-[#949ba7]">Dont miss this opportunity at a special discount just for this week.</p>
        </div>
        <Button className="bg-white p-4 text-[12px] font-bold text-black rounded-2xl whitespace-nowrap">
          View All
        </Button>
      </div>

      {/* grid section - preserved layout but made responsive */}
      <div className='flex'>
        <div>
        <SameCards start={0} end={3} />
        </div>
       
       <div>
        <div className="bg-white border-2 h-full border-[red] md:row-span-2 p-[15px] space-y-[28px]">
                  <div className="">
                    <div className="flex justify-between items-center">
                      <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">76.99$</Button>
                      <CiHeart size={26} />
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/grid1.png"
                        alt="list1"
                        width={340}
                        height={340}
                        className="object-contain h-[150px] w-auto"
                      />
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                
                    </div>
                  </div>
        
                  {/* buttom div */}
                  <div className="mt-4">
                    <StarRating />
                    <div className="space-y-2">
                      <h3 className="text-black text-[14px] font-semibold">Absolut Grapefruit Paloma Sparkling Vodka Cocktail –
                      4pk_355ml</h3>
                      <div className="flex gap-2 items-center">
                      <h3 className="text-[red] font-bold text-[22px]">$6.99</h3>
                      <p className="text-black text-[16px]">$9.99</p>
                    </div>
                      <p className="text-[12px] text-[#949ba7] font-normal">
                      Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
malesuada tincidunt. Class aptent taciti sociosqu ad litora
torquent Vivamus adipiscing nisl ut dolor dignissim semper.
                      </p>
                    </div>
                    
        
                    <div className="border-t-2 gap-2 border-[#D1D5DB] pt-2">
                      <p className="text-[12px] text-[#949ba7] font-normal">This product is about to run out</p>
                      <div className="h-[4px] w-full bg-gradient-to-r from-yellow-500 to-orange-600"></div>
                      <div className="flex gap-2 items-center">
                        <p className="text-[12px] text-[#949ba7] font-normal">available only:</p>
                        <span className="text-black">38</span>
                      </div>
                      <Button className='w-full p-2 text-[12px] bg-[#099b4b] text-white'>
                      Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
       </div>



        <div>
        <SameCards start={0} end={3} />
        </div>
      </div>
    </div>
  )
}

export default BestSeller


const SameCards: React.FC<{ start: number; end: number }> = ({ start, end }) => {
    
      
    return (
        <div className=''>
        {
            products.slice(start, end).map((product, index) =>(
                <>
                <div key ={index} className="border-t-1 pt-4 bg-white border-[#babec4] hidden md:block lg:hidden">
                  <div className="bg-white flex p-4">
                    <div className="flex flex-col justify-between gap-2 w-2/5 mr-2">
                      <div className="flex justify-between items-center w-full">
                        <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">{product.price}</Button>
                        <div>
                          <CiHeart size={26} />
                        </div>
                      </div>
                      <div className="flex justify-start items-center w-full">
                        <Image
                          src={product.image}
                          alt="list1"
                          width={140}
                          height={200}
                          className="h-[120px] w-auto object-contain"
                        />
                      </div>
                      <Countdown startValue={68} />
                    </div>
        
                    {/* right DIV */}
                    <div className="space-y-2 w-3/5">
                      <h1 className="text-black text-[14px] font-semibold">{product.name}</h1>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <FaRegStar key={index} color="#FACC15" size={11} />
                        ))}
                      </div>
        
                      <div className="flex gap-2 items-center">
                        <h1 className="text-[red] font-bold text-[22px]">${product.price}</h1>
                        <p className="text-[12px] text-[#949ba7] font-normal">${product.originalPrice}</p>
                      </div>
                      <div className="w-full border-2 flex justify-between rounded-3xl items-center text-[#634C9F] border-[#634C9F] p-2">
                        <h1>Add to cart</h1>
                        <div className="">
                          <IoMdAdd color="#634C9F" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#949ba7] font-normal">Remains until the end of the</p>
                      </div>
                    </div>
                  </div>
                </div>
        
                {/* fifth - mobile and large screens */}
                <div className="border-t-1 pt-4 bg-white border-[#babec4] md:hidden lg:block">
                  <div className="bg-white flex flex-col sm:flex-row p-4">
                    <div className="flex flex-col justify-between gap-2 w-full sm:w-2/5 mr-0 sm:mr-2 mb-4 sm:mb-0">
                      <div className="flex justify-between items-center w-full">
                        <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">${product.price}</Button>
                        <div>
                          <CiHeart size={26} />
                        </div>
                      </div>
                      <div className="flex justify-center sm:justify-start items-center w-full">
                        <Image
                          src={product.image}
                          alt="list1"
                          width={140}
                          height={200}
                          className="h-[120px] w-auto object-contain"
                        />
                      </div>
                      <div className="flex justify-center sm:justify-start">
                        <Countdown startValue={68} />
                      </div>
                    </div>
        
                    {/* right DIV */}
                    <div className="space-y-2 w-full sm:w-3/5">
                      <h1 className="text-black text-[14px] font-semibold">{product.name}</h1>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((_, index) => (
                          <FaRegStar key={index} color="#FACC15" size={11} />
                        ))}
                      </div>
        
                      <div className="flex gap-2 items-center">
                        <h1 className="text-[red] font-bold text-[22px]">${product.price}</h1>
                        <p className="text-[12px] text-[#949ba7] font-normal">{product.originalPrice}</p>
                      </div>
                      <div className="w-full border-2 flex justify-between rounded-3xl items-center text-[#634C9F] border-[#634C9F] p-2">
                        <h1>Add to cart</h1>
                        <div className="">
                          <IoMdAdd color="#634C9F" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[12px] text-[#949ba7] font-normal">Remains until the end of the</p>
                      </div>
                    </div>
                  </div>
                </div>
        
                </>
            ))
        }
        </div>
    )
}