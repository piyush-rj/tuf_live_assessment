import BentoBottomSection from "./BentoBottomSection/BentoBottomSection";
import BentoTopSection from "./BentoTopSection/BentoTopSection";

export default function BentoSectionMain() {
    return (
        <div className="h-190 w-190 flex flex-col gap-4 scale-80">
            
            <BentoTopSection/> 
            <BentoBottomSection/>
        </div>
    )
}