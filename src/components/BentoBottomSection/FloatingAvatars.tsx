import React from "react";

export default function FloatingAvatars() {
  return (
    <div className="absolute right-[-20px] top-18 flex items-center z-20">
      
      <div className="h-16 w-16 rounded-full bg-neutral-200 shadow-lg flex items-center justify-center">
      </div>

      <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center -ml-4 rotate-10">
        <div className="h-9 w-9 bg-blue-950 rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 border-l-2 border-white border-r-2 rounded-sm" />
        </div>
      </div>
    </div>
  );
}