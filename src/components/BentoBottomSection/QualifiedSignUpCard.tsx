import React from "react";
import { FiMail, FiExternalLink } from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";

export default function QualifiedSignupCard() {
  return (
    <div className="w-[440px] bg-white rounded-xl shadow-md shadow-black/5 ring-1 ring-black/5 p-5 flex flex-col gap-4 scale-60 shrink-0">
      
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <div className="h-6 w-6 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-xs">
            J
          </div>
          <span className="font-medium text-neutral-700">June</span>
          <span className="text-neutral-400">App</span>
          <span className="text-neutral-400">10:36 AM</span>
        </div>

        {/* Slack icon mimic */}
        <div className="h-5 w-5 rounded-sm bg-gradient-to-br from-green-400 via-yellow-400 to-red-400" />
      </div>

      {/* TITLE */}
      <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
        <BsLightningChargeFill className="text-yellow-500" />
        Qualified signup
      </div>

      {/* USER */}
      <div className="flex items-center gap-2 text-sm text-neutral-700">
        <FiMail className="text-neutral-400" />
        <span>
          Eoghan McCabe{" "}
          <span className="text-indigo-500">eoghan@intercom.io</span>
        </span>
      </div>

      {/* GRID INFO */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm mt-2">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-3">
          <Info label="Company name" value="Intercom" />
          <Info label="Role" value="CTO & Co-Founder" />
          <Info label="Company size" value="800" />
          <Info label="Funding amount" value="33M" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-3 border-l border-neutral-200 pl-6">
          <Info label="Location" value="Dublin, Ireland" />
          <Info
            label="Company website"
            value="intercom.io"
            link
          />
          <Info
            label="LinkedIn"
            value="View profile"
            link
          />
          <Info
            label="Crunchbase"
            value="View company"
            link
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- INFO ROW ---------------- */

function Info({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-neutral-400 text-xs">{label}:</span>
      <span
        className={`flex items-center gap-1 ${
          link
            ? "text-indigo-500 hover:underline cursor-pointer"
            : "text-neutral-800"
        }`}
      >
        {value}
        {link && <FiExternalLink size={12} />}
      </span>
    </div>
  );
}