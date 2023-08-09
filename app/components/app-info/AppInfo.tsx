import React from "react";

function AppInfo() {
  return (
    <div className="mx-auto">
      <div
        className="relative w-full h-96 bg-slate-300"
        style={{
          backgroundImage: "url('/app-info/app-info-banner.png')",
          backgroundRepeat: "round",
          objectFit: "cover",
        }}
      ></div>
    </div>
  );
}

export default AppInfo;
