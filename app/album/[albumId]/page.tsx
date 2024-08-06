import React from "react";

export default function AlbumPage() {
  return (
    <main className="text-text-white">
      <section className="h-[438px] w-full flex items-center pl-12 bg-gradient-to-b from-[#010A20] via-[#0D1E35] to-[#050709]">
        <div className="flex items-end gap-8">
          <img
            src="/images/album-album.png"
            alt=""
            className="w-[282px] h-[283px]"
          />
          <div className="space-y-5">
            <p className="uppercase">Album</p>
            <p>SOS</p>
            <p className="">
              <img
                src=""
                alt="Img"
                className="w-[20px] h-[20px] rounded-full "
              />
              <span className="font-bold">SZA</span>
              <span>2022</span>
              <span>12 songs</span>
              <span>59 mins 54 seconds</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
