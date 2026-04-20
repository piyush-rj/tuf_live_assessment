import { BsFillLightningChargeFill } from "react-icons/bs";
import BentoTopSectionCompanyCard from "./BentoTopSectionCompanyCard";

export default function BentoTopSection() {
  return (
    <div className="w-full h-[260px] bg-blue-100 rounded-2xl flex px-10 py-8 relative shrink-0">
      
      <div className="w-[40%] text-blue-900 font-semibold text-[18px] leading-[1.20] tracking-tight">
        We automatically generate reports for each of your customers
      </div>

      <div className="absolute right-6 bottom-0 w-[58%] h-[210px] bg-white/60 backdrop-blur-sm rounded-tl-xl p-3 flex gap-4 shadow-xs shadow-black/5 ring-1 ring-black/3">

        <div className="w-1/2 h-full bg-white rounded-lg shadow-sm ring-1 ring-black/5 flex flex-col overflow-hidden">
          
          <div className="h-1.5 w-full bg-linear-to-r from-pink-200 via-purple-200 to-blue-200" />

          <div className="p-4 flex flex-col gap-4 flex-1">
            
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-blue-950 rounded-md relative flex items-center justify-center">
                <div className="w-5 h-5 border-l-2 border-white border-r-2 rounded-sm" />
                
                <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 bg-green-400 rounded-full ring-2 ring-white" />
              </div>

              <div>
                <div className="text-sm font-semibold text-neutral-800">
                  Intercom
                </div>
                <div className="text-xs text-neutral-400">
                  Joined 9 Feb 2023
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-xs">
              
              <Row label="Total seats" value="50" />
              <Row label="Active seats" value="22" />
              <Row label="Active last 7 days" value="True" />

            </div>
          </div>
        </div>

        <div className="w-1/2 h-full -mt-8 -ml-8 -rotate-2">
          <BentoTopSectionCompanyCard />
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center text-neutral-700">
      <div className="flex items-center gap-1.5 text-neutral-500">
        <BsFillLightningChargeFill className="text-green-500 text-[10px]" />
        {label}
      </div>
      <div className="text-neutral-800">{value}</div>
    </div>
  );
}