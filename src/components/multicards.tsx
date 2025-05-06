import { FaRegStar } from "react-icons/fa"
import { Button } from "./ui/button"
import { CiHeart, CiShoppingCart } from "react-icons/ci"
import Image from "next/image"

const MultiCards = () => {
  const StarRating = ({ size = 16 }) => (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <FaRegStar key={index} color="#FACC15" size={size} />
      ))}
    </div>
  )

  const products = [
    {
      name: "Great Value Rising Crust Frozen Pizza, Supreme",
      originalPrice: 9.99,
      discountedPrice: 8.99,
      discount: 11,
      rating: 3,
      image: "/multi1.png", // Replace with actual image URL if needed
      inStock: true, // Add this property to indicate stock status
    },
    {
      name: "Simple Kitchen FD Sliced Strawberries - 10lb",
      originalPrice: 24.9,
      discountedPrice: 21.9,
      discount: 13,
      rating: 3,
      image: "/multi2.png", // Replace with actual image URL if needed
      inStock: true, // Add this property to indicate stock status
    },
    {
      name: "Red Baron Frozen Hand Tossed Ultimate Pepperoni Pizza",
      originalPrice: 19.99,
      discountedPrice: 14.99,
      discount: 20,
      rating: 3,
      image: "/multi4.png",
      inStock: true, // Add this property to indicate stock status
    },
    {
      name: "Oscar Mayer Ham & Swiss Melt Scrambler - 3oz",
      originalPrice: 12.9,
      discountedPrice: 11.9,
      discount: 8,
      rating: 3,
      image: "/multi3.png",
      inStock: true, // Add this property to indicate stock status
    },
    {
      name: "Large Garden Spinach & Herb Wrap Tortillas - 15oz, 6ct",
      originalPrice: 32.8,
      discountedPrice: 27.9,
      discount: 16,
      rating: 5,
      image: "/multi5.png",
      inStock: true, // Add this property to indicate stock status
    },
    {
      name: "Great Value Rising Crust Pizza, Cheese, 27.4oz",
      originalPrice: 14.89,
      discountedPrice: 12.89,
      discount: 14,
      rating: 2,
      image: "/multi6.png",
      inStock: true, // Add this property to indicate stock status
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full overflow-x-auto">
      {products.map((product, index) => (
        <div key={index} className="bg-white border-x-1 border-[#babec4] p-[8px] min-w-[150px] flex flex-col">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <Button className="bg-red-700 text-white font-bold p-2 text-[8px]">75%</Button>
              <CiHeart size={24} className="cursor-pointer" />
            </div>
            <div className="flex justify-center items-center h-[120px] sm:h-[150px]">
              <Image
                src={product.image || "/placeholder.svg"}
                alt="product image"
                width={200}
                height={200}
                className="object-contain max-h-full w-auto"
              />
            </div>
          </div>

          {/* bottom div */}
          <div className="mt-2 sm:mt-4">
            <StarRating size={12} />
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-black text-[10px] sm:text-[12px] font-semibold line-clamp-2">{product.name}</h3>
            </div>
            <div className="flex gap-2 items-center">
              <h3 className="text-[red] font-bold text-[14px] sm:text-[18px]">${product.discountedPrice}</h3>
              <p className="text-black text-[12px] sm:text-[14px]">${product.originalPrice}</p>
            </div>
            <div className="flex justify-between items-center w-full max-w-[100px]">
              <div className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] bg-[#16A34A] rounded-3xl flex justify-center items-center">
                <CiShoppingCart color="white" size={18} className="sm:text-[20px]" />
              </div>
              <h1
                className={`text-[10px] sm:text-[12px] font-bold ${product.inStock ? "text-[#16A34A]" : "text-gray-500"}`}
              >
                {product.inStock ? "IN STOCK" : "OUT OF STOCK"}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MultiCards
