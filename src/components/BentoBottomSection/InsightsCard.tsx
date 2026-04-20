import React from "react";
import { FiLayers } from "react-icons/fi";

export default function InsightsCard() {
  return (
    <div className="relative w-full h-1/2 bg-[#DFF3E6] rounded-2xl px-6 py-6 overflow-hidden">
      
      <div className="max-w-[70%] -space-y-1">
        <h2 className="text-[18px] font-bold text-green-900">
          Integrated with your CRM
        </h2>

        <p className="text-[13px] text-green-800/90 mt-1 tracking-tight leading-[1.4] -mr-20 font-semibold">
          Connect June to your CRM and sync product usage data with your CS and sales teams
        </p>
      </div>

      <div className="absolute -right-11 -bottom-6 w-[90%] bg-white rounded-tl-xl overflow-hidden scale-80">
        
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
          <span className="text-sm font-semibold text-neutral-800">CRM</span>

          <div className="flex items-center gap-2 pr-8">
            <FiLayers className="text-neutral-500" />
            <div className="h-4 w-4 rounded-full bg-orange-400" />
          </div>
        </div>

        <div className="text-sm">
          
          <div className="grid grid-cols-2 px-4 py-2 text-xs text-neutral-400 pr-15">
            <span>Company</span>
            <span className="text-right">Active seats</span>
          </div>

          <div className="grid grid-cols-2 px-4 py-2 items-center border-t border-neutral-100 pr-20">
            <div className="flex items-center gap-2 text-neutral-700">
              <div className="h-5 w-5 bg-blue-950 rounded-md" />
              Intercom
            </div>

            <div className="text-right text-neutral-800">
              22 <span className="text-green-600">(+3)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 px-4 py-2 items-center border-t border-neutral-100 pr-20">
            <div className="flex items-center gap-2 text-neutral-700">
              <div className="h-5 w-5 bg-pink-300 rounded-md" />
              Amie
            </div>

            <div className="text-right text-neutral-800">
              20 <span className="text-red-500">(-2)</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}