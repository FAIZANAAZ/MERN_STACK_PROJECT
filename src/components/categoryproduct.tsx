import { Button } from "./ui/button"
import Image from "next/image"

const CategoryProduct = () => {
  const products = [
    {
      id: 1,
      mainheading: "Make your grocery shopping easy with us",
      description: "Feed your family the best",
      image: "/banner2.png", // Replace with actual image path
    },
    {
      id: 2,
      mainheading: "Get your everyday needs here with us",
      description: "A different kind of grocery store",
      image: "/banner1.png", // Replace with actual image path
    },
  ]

  return (
    <div className="py-[20px] md:py-[60px] space-y-4 w-full max-w-[1400px] mx-auto px-4 md:px-6">
      {/* top section - preserved layout but fixed styling */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:bg-[#D1D5DB] w-full sm:w-auto p-2 sm:p-2 rounded-lg">
          <h1 className="font-bold text-[18px]">Category Products</h1>
          <p className="text-[13px] sm:ml-2 text-[#949ba7]">Do not miss the current offers until the end of March.</p>
        </div>
        <Button className="bg-white p-4 text-[12px] font-bold text-black rounded-2xl whitespace-nowrap border border-gray-200 hover:bg-gray-50">
          View All
        </Button>
      </div>

      {/* bottom section - improved responsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {products.map((product) => (
          <div key={product.id} className="relative border border-gray-200 overflow-hidden h-[200px] sm:h-[250px] md:h-[200px]">
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
                <h1 className="font-bold text-[18px] leading-7 sm:text-[20px] md:text-[20px] text-black mt-1">
                  {product.mainheading}
                </h1>
                <p className="text-[12px] sm:text-[13px] text-[#949ba7] mt-1 mb-3">{product.description}</p>
                <Button className="bg-white p-3 sm:p-4 text-[11px] sm:text-[12px] font-bold text-black rounded-full whitespace-nowrap hover:bg-gray-50">
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

export default CategoryProduct
