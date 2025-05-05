import CategoryProduct from "@/components/categoryproduct";
import EditorPick from "@/components/editorpick";
import Hero from "@/components/hero";
import MultiCards from "@/components/multicards";
import ShowItems from "@/components/show_items";


export default function Home() {
  return (
   <>
   
   <Hero/>
   <ShowItems/>
   <div className=" py-[20px] md:py-[60px]  px-[30px] md:px-[120px]  lg:px-[180px] bg-[#D1D5DB]">
   <EditorPick/>
   <CategoryProduct/>
   <MultiCards/>
   </div>
   </>
  );
}
