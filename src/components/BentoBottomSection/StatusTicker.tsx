import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";

interface StatusTickerProps {
  text: string;
  tickerText: string;
  className?: string;
  lineClassName?: string;
}

export default function StatusTicker({
  text,
  tickerText,
  className = "",
  lineClassName
}: StatusTickerProps) {
  return (
    <div
      className={`inline-flex h-10 w-fit absolute items-center gap-2 px-2.5 rounded-full bg-white text-green-700 text-xs font-medium ${className}`}
    >
      <div className={`h-0.5 w-full bg-linear-to-r from-transparent via-green-50 to-green-500 absolute -left-36 ${lineClassName}`}/>
      <BsFillLightningChargeFill className="text-green-500 text-[10px]" />

      <span className="text-neutral-600 font-medium">{text}</span>

      <span className="bg-green-100 text-green-700 px-2 py-[2px] rounded-full text-[11px] font-semibold">
        {tickerText}
      </span>
    </div>
  );
}