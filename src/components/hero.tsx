import Image from "next/image"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="h-[500px] sm:h-[500px] w-full bg-[#f1f0f3] flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          className="w-full h-full object-cover z-0"
          src="/heroback.png"
          alt="hero"
          width={2000}
          height={2000}
          priority
        />
        <div className="absolute h-full flex justify-center w-full px-4 sm:px-6 md:w-[70%] lg:w-[60%] xl:w-[42%] space-y-2 sm:space-y-[6.8px] flex-col top-0 left-0 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-[180px]">
          <Button className="w-[180px] bg-gradient-to-r from-green-400 to-white-400 text-black text-xs sm:text-sm">
            Weekend Discount
          </Button>
          <h1 className="leading-tight sm:leading-[54px] text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-[#39245F]">
            Shopping with us for better quality and the best price
          </h1>
          <p className="text-black leading-snug sm:leading-[20px] text-sm sm:text-[16px] font-normal">
            We have prepared special discounts for you on grocery products
            <span className="block">Don't miss these opportunities...</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
            <Button className="bg-[#634C9F] text-white text-xs sm:text-[14px] font-bold p-2 sm:p-[12px]">
              Shop Now
            </Button>
            <div className="mt-2 sm:mt-0">
              <h1 className="text-[red] text-xl sm:text-2xl md:text-[28px] font-bold">
                $21.67 <span className="text-black text-sm sm:text-[19px]">$26.67</span>
              </h1>
              <p className="text-[10px] sm:text-[11px] font-normal text-[#818694]">
                Don't miss this limited time offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
