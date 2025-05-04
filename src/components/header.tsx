
import { FaAngleDown, FaHeart, FaUser } from "react-icons/fa"
import Image from "next/image"
import { IoLocationOutline } from "react-icons/io5"
import { Input } from "@/components/ui/input"
import { IoIosSearch } from "react-icons/io"
import { CiShoppingCart } from "react-icons/ci"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  

  return (
    <div className="w-full">
      {/* Promotional bar */}
      <div className="bg-[#634C9F] text-white py-3  hidden md:block px-[180px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 text-center lg:text-left">
            <p className="text-xs sm:text-sm">
              FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm">
              <p>Until the end of the sale:</p>
              <div className="flex items-center space-x-1">
                <h3 className="font-bold">47</h3>
                <p>Days</p>
                <h3 className="font-bold">06</h3>
                <p>Hours</p>
                <h3 className="font-bold">57</h3>
                <p>Min</p>
                <h3 className="font-bold">08</h3>
                <p>Sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary navigation - hidden on mobile */}
      <div className="hidden  md:block border-b border-[#F3F4F6]">
        <div className="container mx-auto py-3 px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 lg:space-x-6 text-xs text-[#6B7280]">
              <h3>About Us</h3>
              <h3>My Account</h3>
              <h3>Wishlist</h3>
              <p>
                We deliver to you every day from <span className="text-red-500">7:00 to 23:00</span>
              </p>
            </div>

            <div className="flex space-x-4 text-xs text-[#6B7280]">
              {["English", "USD", "Order Tracking"].map((item, index) => (
                <div className="flex items-center space-x-1" key={index}>
                  <h3>{item}</h3>
                  <FaAngleDown size={10} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b  border-[#F3F4F6]">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image alt="logo" src="/logo.png" width={36} height={36} />
              <h1 className="text-xl font-bold text-black">JinStore</h1>
            </div>

            {/* Location - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-1">
              <IoLocationOutline size={20} />
              <p className="text-xs text-[#6B7280]">
                Deliver to <span className="font-bold text-black">all</span>
              </p>
            </div>

            {/* Search - hidden on small mobile */}
            <div className="hidden sm:flex  flex-1 mx-4 relative">
              <Input
                className="w-full bg-[#F3F4F6] rounded-lg"
                placeholder="Search for products, categories or brands..."
              />
              <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2" size={20} />
            </div>

            {/* User actions */}
            <div className="flex  items-center space-x-3 lg:space-x-5">
              {/* Account - hidden on mobile */}
              <div className="hidden md:flex items-center space-x-1">
                <FaUser size={20} />
                <div className="text-xs text-[#6B7280]">
                  <p>sign in</p>
                  <p className="font-bold text-black">Account</p>
                </div>
              </div>

              {/* Wishlist and Cart */}
              <FaHeart size={20} />
              <div className="relative">
                <CiShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-[#634C9F] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>

              {/* Mobile menu button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                  <div className="flex flex-col h-full py-6 space-y-6">
                    {/* Mobile search */}
                    <div className="relative">
                      <Input className="w-full bg-[#F3F4F6] rounded-lg" placeholder="Search..." />
                      <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2" size={20} />
                    </div>

                    {/* Mobile account */}
                    <div className="flex items-center space-x-2 pb-4 border-b">
                      <FaUser size={18} />
                      <div className="text-sm">
                        <p className="text-[#6B7280]">sign in</p>
                        <p className="font-bold">Account</p>
                      </div>
                    </div>

                    {/* Mobile navigation */}
                    <nav className="flex flex-col space-y-4">
                      {["Home", "Shop", "Fruits & Vegetables", "Beverages", "Blog", "Contact"].map((item) => (
                        <div key={item} className="flex justify-between items-center py-2 border-b">
                          <span className="font-medium">{item}</span>
                          {(item === "Home" || item === "Shop") && <FaAngleDown size={12} />}
                        </div>
                      ))}
                    </nav>

                    {/* Mobile secondary links */}
                    <div className="mt-auto space-y-4 text-sm text-[#6B7280]">
                      <div className="flex justify-between items-center">
                        <span>Trending Products</span>
                        <FaAngleDown size={12} />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-red-600">Almost Finished</span>
                        <div className="flex items-center space-x-2">
                          <FaAngleDown size={12} />
                          <div className="bg-[#FF0000] text-white text-[10px] font-bold px-[5px] rounded-[5px]">
                            SALE
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t space-y-3">
                        <p>About Us</p>
                        <p>My Account</p>
                        <p>Wishlist</p>
                        <p>Order Tracking</p>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar for small mobile only */}
      <div className="sm:hidden px-4 py-2 border-b border-[#F3F4F6]">
        <div className="relative">
          <Input className="w-full bg-[#F3F4F6] rounded-lg" placeholder="Search products..." />
          <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2" size={20} />
        </div>
      </div>

      {/* Navigation - hidden on mobile */}
      <div className="hidden md:block  border-b border-[#F3F4F6]">
        <div className="container mx-auto py-3 px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 lg:space-x-8 font-medium text-black">
              {["Home", "Shop", "Fruits & Vegetables", "Beverages", "Blog", "Contact"].map((item) => (
                <div className="flex items-center space-x-1" key={item}>
                  <h3 className="text-xs lg:text-sm">{item}</h3>
                  {(item === "Home" || item === "Shop") && <FaAngleDown size={10} />}
                </div>
              ))}
            </div>

            <div className="flex space-x-4 lg:space-x-6 font-medium">
              <div className="flex items-center space-x-1">
                <h3 className="text-xs lg:text-sm">Trending Products</h3>
                <FaAngleDown size={10} />
              </div>
              <div className="flex items-center space-x-1">
                <h3 className="text-xs lg:text-sm text-red-600">Almost Finished</h3>
                <FaAngleDown size={10} />
                <div className="bg-[#FF0000] text-white text-[10px] font-bold px-[5px] rounded-[5px]">SALE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
