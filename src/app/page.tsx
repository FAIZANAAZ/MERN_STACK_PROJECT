import EditorPick from "@/components/editorpick";
import Hero from "@/components/hero";
import ShowItems from "@/components/show_items";


export default function Home() {
  return (
   <>
   
   <Hero/>
   <ShowItems/>
   <div className=" py-[60px] px-[180px] bg-[#D1D5DB]">
   <EditorPick/>
   </div>
   </>
  );
}
