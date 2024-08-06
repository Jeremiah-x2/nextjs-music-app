"use client";
import {
  MagnifyingGlassIcon,
  PlayIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  return (
    <main className="mx-8 my-8 space-y-[24px]">
      <section>
        <div>
          <div className="w-[356px] h-[48px] relative">
            <MagnifyingGlassIcon
              color="black"
              width={22}
              height={22}
              className="absolute top-1/2 -translate-y-1/2 left-3"
            />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full bg-white py-4 rounded-full px-10"
            />
            <XMarkIcon
              height={15}
              width={15}
              color="black"
              strokeWidth={3}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            />
          </div>
        </div>
      </section>

      <section className="py-[10px]">
        <MenuLists />
      </section>

      <section className="flex gap-4">
        {[
          {
            thumbnail: "/images/search-playlist.png",
            name: "Electronic",
            description: "A collection of warm and cool sounds",
          },
          {
            thumbnail: "/images/search-playlist.png",
            name: "Electronic",
            description: "A collection of warm and cool sounds",
          },
          {
            thumbnail: "/images/search-playlist.png",
            name: "Electronic",
            description: "A collection of warm and cool sounds",
          },
          {
            thumbnail: "/images/search-playlist.png",
            name: "Electronic",
            description: "A collection of warm and cool sounds",
          },
        ].map((item, index) => (
          <Playlist key={index} item={item} />
        ))}
      </section>
    </main>
  );
}

function Playlist({
  item,
}: {
  item: { thumbnail: string; name: string; description: string };
}) {
  return (
    <div className="w-[232px] h-[319px] p-4 space-y-4 bg-text-white bg-opacity-5 rounded-[8px]">
      <div className="w-[200px] h-[200px] relative">
        <img
          src={item.thumbnail}
          alt="Playlist cover Image"
          className="w-full h-full"
        />
        <div className="bg-green absolute translate-y-1/4 bottom-0 right-[10px] z-10 rounded-full w-[50px] h-[50px] flex justify-center items-center">
          <PlayIcon
            stroke="white"
            color="white"
            width={30}
            height={30}
            fill="white"
          />
        </div>
      </div>

      <div>
        <p className="text-text-white text-[16px] font-bold">{item.name}</p>
        <p className="text-text-white text-opacity-50">{item.description}</p>
      </div>
    </div>
  );
}

function MenuLists() {
  const menuOptions: { text: string; isActive: boolean }[] = [
    { text: "All", isActive: true },
    { text: "Playlists", isActive: false },
    { text: "Albums", isActive: false },
    { text: "Poscasts", isActive: false },
    { text: "Profiles", isActive: false },
    { text: "Audiobooks", isActive: false },
  ];

  return (
    <ul className="flex gap-4">
      {menuOptions.map((item, index) => (
        <MenuItem key={index} menuItem={item} />
      ))}
    </ul>
  );
}

function MenuItem({
  menuItem,
}: {
  menuItem: { text: string; isActive: boolean };
}) {
  return (
    <li
      className={`text-text-white px-[22px] py-4 rounded-full ${
        menuItem.isActive
          ? "bg-white text-black font-bold"
          : "text-white bg-text-white bg-opacity-5"
      }`}
    >
      {menuItem.text}
    </li>
  );
}
