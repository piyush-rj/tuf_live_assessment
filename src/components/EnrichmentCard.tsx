import React from "react";
import {
  FiGlobe,
  FiUsers,
  FiDollarSign,
  FiMapPin,
  FiTwitter,
  FiCheckCircle,
} from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";

export default function EnrichmentCard() {
  return (
    <div className="relative w-full h-1/2 bg-[#F6E7C9] rounded-2xl p-6 overflow-hidden">
      
      {/* TEXT */}
      <div className="max-w-[75%]">
        <h2 className="text-[18px] font-bold text-amber-900">
          Automatic enrichment
        </h2>

        <p className="text-[13px] text-amber-800/90 mt-1 leading-[1.4] font-semibold -mr-20">
          Automatically enrich your customers profiles and their users powered
          by GPT
        </p>
      </div>

      {/* FLOATING AVATAR */}
      <div className="absolute -right-2 top-19 flex items-center z-10">
        <div className="h-15 w-15 rounded-full bg-white shadow-md -ml-3 border border-white shrink-0">
          {/* map placeholder */}
        </div>
        <div className="h-15 w-15 rounded-full bg-white shadow-md flex items-center justify-center z-10 shrink-0">
          <div className="h-9 w-8 bg-blue-950 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 border-l-2 border-white border-r-2 rounded-sm" />
          </div>
        </div>

      </div>

      <div className="absolute -bottom-8 left-4 right-4 bg-white rounded-t-xl p-4">
        
        <div className="flex items-center gap-2 text-purple-500 text-sm font-semibold mb-3">
          <GiSparkles size={16} />
          Enriched with AI
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-12 text-[10px]">
          
          <Row icon={<FiGlobe />} label="Website" value="intercom.io" />
          <Row icon={<FiMapPin />} label="Location" value="Dublin, Ireland" />

          <Row icon={<FiUsers />} label="Employees" value="800" />
          <Row icon={<FiTwitter />} label="Twitter" value="@intercom" />

          <Row icon={<FiDollarSign />} label="Funding" value="$241M" />
          <Row
            icon={<FiCheckCircle className="text-green-500" />}
            label="Qualified"
            value="true"
            highlight
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- ROW ---------------- */

function Row({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 text-neutral-600">
      <div className="text-neutral-400">{icon}</div>

      <span className="text-neutral-400">{label}</span>

      <span
        className={`ml-auto ${
          highlight ? "text-green-500 font-medium" : "text-neutral-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
}