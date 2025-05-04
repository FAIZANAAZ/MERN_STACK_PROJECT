import Image from "next/image"

const ShowItems = () => {
  const items = [
    {
      image: "/list1.png",
      title: "Fruits & Vegetables",
    },
    {
      image: "/list2.png",
      title: "Baby & Pregnancy",
    },
    {
      image: "/list3.png",
      title: "Beverages",
    },
    {
      image: "/list4.png",
      title: "Meats & Seafood",
    },
    {
      image: "/list5.png",
      title: "Biscuits & Snacks",
    },
    {
      image: "/list6.png",
      title: "Breads & Bakery",
    },
    {
      image: "/list7.png",
      title: "Breaksfast & Dairy",
    },
    {
      image: "/list8.png",
      title: "Frozen Foods",
    },
    {
      image: "/list9.png",
      title: "Grocery & Staples",
    },
  ]

  return (
    <div className="py-8 md:py-12 lg:py-[63px] bg-[#f1f0f3] w-full">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[180px] max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 justify-items-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-[112px] md:w-[112px]">
                <Image
                  className="object-contain"
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                />
              </div>
              <h1 className="text-black text-xs sm:text-sm md:text-[10px] font-bold mt-2 max-w-[112px]">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowItems
