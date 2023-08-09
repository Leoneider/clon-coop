import React from "react";
import Image from "next/image";

function AppInfo() {
  return (
    <div
      className="relative w-full bg-slate-300 mt-16"
      style={{
        backgroundImage: "url('/app-info/app-info-banner.png')",
        backgroundRepeat: "round",
        objectFit: "cover",
      }}
    >
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-2 place-items-center h-full pb-10">
          <div>
            <p className="text-3xl text-primary font-semibold">
              Descarga nuestra app y disfruta <br /> todos sus beneficios.
            </p>
            <div className="grid grid-cols-2 place-items-center gap-7">
              <div>
                <Image
                  alt="qr android"
                  src="/app-info/qr-playstore.svg"
                  width={222}
                  height={222}
                  className="p-7"
                />

                <Image
                  alt="app android"
                  src="/app-info/playstore.png"
                  width={222}
                  height={66}
                />
              </div>
              <div>
                <Image
                  alt="qr ios"
                  src="/app-info/qr-playstore.svg"
                  width={222}
                  height={222}
                  className="p-7"
                />

                <Image
                  alt="app io"
                  src="/app-info/appstore.svg"
                  width={222}
                  height={66}
                  className="p-2"
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              alt="app crediservir"
              src="/app-info/mockup-app.png"
              width={380}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
