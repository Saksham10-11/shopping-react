import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className="loader mb-4"></div>
        <div className="text-2xl font-semibold text-white">Loading...</div>
      </div>
    </div>
  );
}

export default Loading;
