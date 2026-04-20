import EnrichmentCard from "./EnrichmentCard";
import FloatingAvatars from "./FloatingAvatars";
import InsightsCard from "./InsightsCard";
import QualifiedSignupCard from "./QualifiedSignUpCard";
import StatusTicker from "./StatusTicker";

export default function BentoBottomSection() {
    return (
        <div className="flex-1 flex gap-4 h-full w-full relative">
            {/* bento left section */}
            <div className="bg-pink-100 h-[78%] w-1/2 rounded-2xl px-10 py-8 flex flex-col overflow-hidden relative">
            <div className="rounded-r-3xl bg-white h-15 w-2 absolute left-0 top-[52%]"/>
                <div className="h-[22%] w-full flex flex-col">
                    <div className="font-bold text-[18px] text-pink-800">
                        Celebrate milestones
                    </div>
                    <div className="text-[12.5px] text-pink-700 font-semibold leading-[1.3]">
                        Instant alerts and weekly digests to keep your team aligned and celebrate wins
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-start -mt-9">
                    <QualifiedSignupCard/>
                </div>
            </div>

            {/* bento right section */}
            <div className="h-full w-1/2 rounded-2xl pt-5 flex flex-col gap-4 pb-10 shrink-0">
            {/* yellow card */}
               <EnrichmentCard/> 
               <FloatingAvatars/>
                <InsightsCard />
            </div>
            <StatusTicker
                text="Last seen"
                tickerText="today"
                className="h-7! bottom-17! right-[47%] scale-90"
            />

            <StatusTicker
                text="Activated"
                tickerText="true"
                className="h-7! bottom-5! right-[40%] scale-90"
                lineClassName="-left-33!"
            />
        </div>
    )
}