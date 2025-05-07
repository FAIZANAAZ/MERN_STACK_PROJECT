import { Button } from "./ui/button"
import Image from "next/image"

const Banner2 = () => {
    const products = [
        {
          id: 1,
          mainheading: "We provide you the best quality products",
          description: "A fresh juice to start your day",
          image: "/2ndbaner4.png",
        },
        {
          id: 2,
          mainheading: "We make your grocery shopping more exciting",
          description: "Shere the moment...",
          image: "/2ndbaner2.png",
        },
        {
          id: 3,
          mainheading: "The one supermarket that saves your money",
          description: "Best deals for better shopping",
          image: "/2ndbaner3.png",
        },
      ];
      
  return (
    <div className="py-[20px] md:py-[30px] space-y-4 w-full max-w-[1400px] mx-auto px-4 md:px-6">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
        {products.map((product) => (
          <div key={product.id} className="relative border border-gray-200 overflow-hidden h-[200px] sm:h-[250px] md:h-[230px]">
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={`product-${product.id}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center p-4 sm:p-6 md:p-8">
              <div className=" p-4 sm:p-6 rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
                <h3 className="font-semibold text-[12px] sm:text-[14px] text-[#7C2D12]">Only This Week</h3>
                <h1 className="font-bold text-[18px] leading-7 sm:text-[20px] md:text-[16px] text-black mt-1">
                  {product.mainheading}
                </h1>
                <p className="text-[12px] sm:text-[13px] text-[#949ba7] mt-1 mb-3">{product.description}</p>
                <Button className="bg-white p-2 sm:p-2 text-[12px] sm:text-[10px] font-bold text-black rounded-full whitespace-nowrap hover:bg-gray-50">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner2
