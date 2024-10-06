
import Marquee from "@/components/ui/marquee";
import { images } from "@/constants/data";




export function Technologies() {
    const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);
  return (
    <div className="overflow-hidden py-4">
        
      <Marquee pauseOnHover className="[--duration:20s]">
      {
          firstRow.map((image,index)=>(
            <img key={index} src={`/assets/${image}.png`}  className="w-16 h-16 cursor-pointer"/>
          ))
        }
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:20s]">
      {
          secondRow.map((image,index)=>(
            <img key={index} src={`/assets/${image}.png`}  className="w-16 h-16 cursor-pointer"/>
          ))
        }
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
  
    </div>
  );
}
