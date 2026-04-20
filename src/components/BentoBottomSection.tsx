import EnrichmentCard from "./EnrichmentCard";
import InsightsCard from "./InsightsCard";
import QualifiedSignupCard from "./QualifiedSignUpCard";

export default function BentoBottomSection() {
    return (
        <div className="flex-1 flex gap-4 h-full w-full relative">
            {/* bento left section */}
            <div className="bg-pink-100 h-[78%] w-1/2 rounded-2xl px-10 py-8 flex flex-col overflow-hidden relative">
                <div className="h-[22%] w-full flex flex-col gap-y-1">
                    <div className="font-bold text-[18px] text-pink-800">
                        Celebrate milestones
                    </div>
                    <div className="text-[12.5px] text-pink-700 font-semibold leading-[1.3]">
                        Instant alerts and weekly digests to keep your team aligned and celebrate wins
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-start -mt-10">
                    <QualifiedSignupCard/>
                </div>
            </div>

            {/* bento right section */}
            <div className="h-full w-1/2 rounded-2xl pt-5 flex flex-col gap-4 pb-10 shrink-0">
            {/* yellow card */}
               <EnrichmentCard/> 
                <InsightsCard />
            </div>

            <div className="absolute h-10 w-50 rounded-full bottom-10 right-1/2 translate-x-1/2">

            </div>
        </div>
    )
}