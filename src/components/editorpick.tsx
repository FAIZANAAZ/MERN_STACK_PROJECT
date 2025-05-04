import { Button } from "@/components/ui/button"
import { CiHeart } from "react-icons/ci"
import Image from "next/image"
import { GiThreeLeaves } from "react-icons/gi"
import { IoMdAdd } from "react-icons/io"
import { FaRegStar } from "react-icons/fa"

// Reusable star rating component that maintains original styling
const StarRating = ({ size = 16 }) => (
  <div className="flex items-center">
    {[1, 2, 3, 4, 5].map((_, index) => (
      <FaRegStar key={index} color="#FACC15" size={size} />
    ))}
  </div>
)

// Reusable countdown component that maintains original styling
const Countdown = ({ startValue = 87 }) => (
  <div className="flex items-center gap-1">
    {[startValue, 36, 57].map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-2 border-1 border-[gray] text-black p-1 text-[12px] font-bold rounded-lg"
      >
        {item}
      </div>
    ))}
    <div className="flex items-center gap-2 border-1 border-[gray] text-black rounded-lg">
      <span>:</span> 08
    </div>
  </div>
)

const EditorPick = () => {
  return (
    <div className="space-y-4 w-full max-w-[1400px] mx-auto px-4 md:px-6">
      {/* top section - preserved exactly as original */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row sm:items-center bg-[#D1D5DB] w-full p-2 sm:p-0">
          <h1 className="font-bold text-[18px]">Editors Pick</h1>
          <p className="text-[13px] sm:ml-2 text-[#949ba7]">New products with updated stocks.</p>
        </div>
        <Button className="bg-white p-4 text-[12px] font-bold text-black rounded-2xl whitespace-nowrap">
          View All
        </Button>
      </div>

      {/* grid section - preserved layout but made responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr_2fr] grid-rows-auto md:grid-rows-2 w-full">
        {/* first */}
        <div className="bg-white border-x-1 border-[#babec4] md:row-span-2 p-[15px]">
          <div className="">
            <div className="flex justify-between items-center">
              <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">75%</Button>
              <CiHeart size={26} />
            </div>
            <div className="flex justify-center">
              <Image
                src="/grid1.png"
                alt="list1"
                width={200}
                height={200}
                className="object-contain h-[150px] w-auto"
              />
            </div>
            <div className="flex justify-between gap-4 items-center">
              <Button className="bg-gradient-to-r from-green-600 to-white-300 rounded-3xl text-black font-bold text-[10px]">
                <GiThreeLeaves />
                ORGANIC
              </Button>
              <div className="bg-[#634C9F] p-2 rounded-full">
                <IoMdAdd />{" "}
              </div>
            </div>
          </div>

          {/* buttom div */}
          <div className="mt-4">
            <StarRating />
            <div className="space-y-2">
              <h3 className="text-black text-[14px] font-semibold">100 Percent Apple Juice 64 fl oz Bottle</h3>
              <p className="text-[12px] text-[#949ba7] font-normal">
                Vivamus adipiscing nisl ut dolor malesuada tincidunt.malesuada tincidunt.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <h3 className="text-[red] font-bold text-[22px]">$0.55</h3>
              <p className="text-black text-[16px]">$1.99</p>
            </div>

            <div className="border-t-2 gap-2 border-[#D1D5DB] pt-2">
              <p className="text-[12px] text-[#949ba7] font-normal">This product is about to run out</p>
              <div className="h-[4px] w-full bg-gradient-to-r from-yellow-500 to-orange-600"></div>
              <div className="flex gap-2 items-center">
                <p className="text-[12px] text-[#949ba7] font-normal">available only:</p>
                <span className="text-black">23</span>
              </div>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="bg-white flex flex-col sm:flex-row p-4">
          <div className="flex flex-col justify-between gap-2 w-full sm:w-2/5 mr-0 sm:mr-2 mb-4 sm:mb-0">
            <div className="flex justify-between items-center w-full">
              <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">11%</Button>
              <div>
                <CiHeart size={26} />
              </div>
            </div>
            <div className="flex justify-center sm:justify-start items-center w-full">
              <Image
                src="/grid6.png"
                alt="list1"
                width={140}
                height={200}
                className="h-[120px] w-auto object-contain"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <Button className="bg-gradient-to-r from-green-600 to-white-300 rounded-3xl text-black font-bold text-[8px] sm:text-[10px]">
                <GiThreeLeaves /> COLD SALE
              </Button>
            </div>
            <div className="flex justify-center sm:justify-start">
              <Countdown />
            </div>
          </div>

          {/* right DIV */}
          <div className="space-y-2 w-full sm:w-3/5">
            <h1 className="text-black text-[14px] font-semibold">Great Value Rising Crust Frozen Pizza, Supreme</h1>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <FaRegStar key={index} color="#FACC15" size={11} />
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="text-[red] font-bold text-[22px]">$8.99</h1>
              <p className="text-[12px] text-[#949ba7] font-normal">$9.99</p>
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

        {/* third */}
        <div className="border-x-1 border-[#babec4] bg-white md:row-span-2 p-[15px]">
          <div className="">
            <div className="flex justify-between items-center">
              <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">21%</Button>
              <CiHeart size={26} />
            </div>
            <div className="flex justify-center">
              <Image
                src="/grid3.png"
                alt="list1"
                width={200}
                height={200}
                className="object-contain h-[150px] w-auto"
              />
            </div>
            <div className="flex justify-between gap-4 items-center">
              <Button className="bg-gradient-to-r from-blue-400 to-white-300 rounded-3xl text-[#1f8da0] font-bold text-[10px]">
                <GiThreeLeaves />
                COLD SALE
              </Button>
              <div className="bg-[#634C9F] p-2 rounded-full">
                <IoMdAdd />{" "}
              </div>
            </div>
          </div>

          {/* buttom div */}
          <div className="mt-4">
            <StarRating />
            <div className="space-y-2">
              <h3 className="text-black text-[12px] font-semibold">
                100 Percent Apple Juice 64 fl oz California Pizza Kitchen Margherita, Crispy Thin Crust…
              </h3>
              <p className="text-[10px] text-[#949ba7] font-normal">
                Vivamus adipiscing nisl ut dolor malesuada tincidunt.malesuada tincidunt.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <h3 className="text-[red] font-bold text-[22px]">$11.77</h3>
              <p className="text-black text-[16px]">$14.77</p>
            </div>

            <div className="border-t-2 gap-2 border-[#D1D5DB] pt-2">
              <p className="text-[12px] text-[#949ba7] font-normal">This product is about to run out</p>
              <div className="h-[4px] w-full bg-gradient-to-r from-yellow-500 to-orange-600"></div>
              <div className="flex gap-2 items-center">
                <p className="text-[12px] text-[#949ba7] font-normal">available only:</p>
                <span className="text-black">19</span>
              </div>
            </div>
          </div>
        </div>

        {/* fourth */}
        <div className="bg-white flex flex-col sm:flex-row p-4">
          <div className="flex flex-col justify-between gap-2 w-full sm:w-2/5 mr-0 sm:mr-2 mb-4 sm:mb-0">
            <div className="flex justify-between items-center w-full">
              <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">59%</Button>
              <div>
                <CiHeart size={26} />
              </div>
            </div>
            <div className="flex justify-center sm:justify-start items-center w-full">
              <Image
                src="/grid5.png"
                alt="list1"
                width={140}
                height={200}
                className="h-[120px] w-auto object-contain"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <Button className="bg-gradient-to-r from-blue-400 to-white-300 rounded-3xl text-[#1f8da0] font-bold text-[10px]">
                <GiThreeLeaves /> ORGANIC
              </Button>
            </div>
            <div className="flex justify-center sm:justify-start">
              <Countdown />
            </div>
          </div>

          {/* right DIV */}
          <div className="space-y-2 w-full sm:w-3/5">
            <h1 className="text-black text-[14px] font-semibold">Cantaloupe Melon Fresh Organic Cut</h1>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <FaRegStar key={index} color="#FACC15" size={11} />
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="text-[red] font-bold text-[22px]">$1.25</h1>
              <p className="text-[12px] text-[#949ba7] font-normal">$2.98</p>
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

        {/* fifth */}
        <div className="border-t-1 pt-4 bg-white border-[#babec4] hidden md:block lg:hidden">
          <div className="bg-white flex p-4">
            <div className="flex flex-col justify-between gap-2 w-2/5 mr-2">
              <div className="flex justify-between items-center w-full">
                <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">41%</Button>
                <div>
                  <CiHeart size={26} />
                </div>
              </div>
              <div className="flex justify-start items-center w-full">
                <Image
                  src="/grid7.png"
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
              <h1 className="text-black text-[14px] font-semibold">Simply Orange Pulp Free Juice 52 fl oz</h1>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <FaRegStar key={index} color="#FACC15" size={11} />
                ))}
              </div>

              <div className="flex gap-2 items-center">
                <h1 className="text-[red] font-bold text-[22px]">$2.45</h1>
                <p className="text-[12px] text-[#949ba7] font-normal">$4.13</p>
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
                <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">41%</Button>
                <div>
                  <CiHeart size={26} />
                </div>
              </div>
              <div className="flex justify-center sm:justify-start items-center w-full">
                <Image
                  src="/grid7.png"
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
              <h1 className="text-black text-[14px] font-semibold">Simply Orange Pulp Free Juice 52 fl oz</h1>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <FaRegStar key={index} color="#FACC15" size={11} />
                ))}
              </div>

              <div className="flex gap-2 items-center">
                <h1 className="text-[red] font-bold text-[22px]">$2.45</h1>
                <p className="text-[12px] text-[#949ba7] font-normal">$4.13</p>
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

        {/* sixth */}
        <div className="border-t-1 border-[#babec4] pt-4 bg-white">
          <div className="bg-white flex flex-col sm:flex-row p-4">
            <div className="flex flex-col justify-between gap-2 w-full sm:w-2/5 mr-0 sm:mr-2 mb-4 sm:mb-0">
              <div className="flex justify-between items-center w-full">
                <Button className="bg-red-700 text-white font-bold p-2 text-[10px]">18%</Button>
                <div>
                  <CiHeart size={26} />
                </div>
              </div>
              <div className="flex justify-center sm:justify-start items-center w-full">
                <Image
                  src="/grid4.png"
                  alt="list1"
                  width={140}
                  height={200}
                  className="h-[120px] w-auto object-contain"
                />
              </div>
              <div className="flex justify-center sm:justify-start">
                <Countdown startValue={88} />
              </div>
            </div>

            {/* right DIV */}
            <div className="space-y-2 w-full sm:w-3/5">
              <h1 className="text-black text-[14px] font-semibold">Angel Soft Toilet Paper, 9 Mega Rolls</h1>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <FaRegStar key={index} color="#FACC15" size={11} />
                ))}
              </div>

              <div className="flex gap-2 items-center">
                <h1 className="text-[red] font-bold text-[22px]">$14.12</h1>
                <p className="text-[12px] text-[#949ba7] font-normal">$17.12</p>
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
      </div>
    </div>
  )
}

export default EditorPick
