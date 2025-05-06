import Image from "next/image"

const Banners1 = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
      <div className="relative w-full h-[60px] sm:h-[70px] md:h-[85px]  overflow-hidden rounded-md">
        <Image
          src="/bannerdiscout1.png"
          alt="Banner discount"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          priority
        
        />
      </div>
    </div>
  )
}

export default Banners1
