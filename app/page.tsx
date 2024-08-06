import Image from "next/image";
import WelcomePickContainer from "./ui/WelcomePickContainer";
import DiscoveryPicksCard from "./ui/DiscoveryPicksCard";
import Playlist from "./ui/Playlist";

const time = new Date().getHours();
const greeting = time >= 0 && time < 12 ? "Good Morning" : "Good Evening";
const token =
  "BQBe7XM9Rh8OARpGRzSrPQHqLRIPEiBFLTsNv6ODwRKtNrNRnp1L_lARcncDNM8t0xdrzQv3uddgPhEjzD6MMVSErvlgRuTTftaE_nsNfLTKr0d86cCGnq1w32GMSUSCLamk-JS4Q2H_lHyZFOsCyK6xoKlwAvVQ-2_RDos9qmjsZII6NVqmP7IlTm1siBgFQu66xW_UMICsQdPyRESaymIIKTU6iNSO5RwPIjvRkNyBH02jb1nNwp_1rkUB2w2hh59VjgjCAtYOEjFNY4JCwOeloSxG1Q";

async function getMusicData(
  endpoint: string,
  method: "GET" | "POST" | "PATCH" | "PUT",
  body?: any
) {
  const res: Response = await fetch(`https://api.spotify.com/tracks`, {
    headers: { Authorization: `Bearer ${token}` },
    method,
    body: JSON.stringify(body),
  });

  return await res.json();
}

async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await getMusicData("v1/me/top/tracks?time_range=long_term&limit=5", "GET")
  ).items;
}

export default async function Home() {
  const tracks = await getTopTracks();
  console.log("HELLO SPOTIFY...", tracks);
  return (
    <main className="mx-[2.75rem] my-[3.25rem] space-y-[49px]">
      <h4 className="text-text-white text-[36px] font-bold mb-[38px]">
        {greeting}
      </h4>

      <section className="flex gap-8 mb-[49px]">
        {[
          { thumbnail: "/images/thumbnail.png", name: "Hello" },
          { thumbnail: "/images/thumbnail.png", name: "Hello" },
          { thumbnail: "/images/thumbnail.png", name: "Hello" },
        ].map((item, index) => (
          <WelcomePickContainer key={index} item={item} />
        ))}
      </section>

      <section className="space-y-[30px]">
        <h4 className="font-bold text-text-white text-xl">
          Discovery Picks for you
        </h4>

        <div className="flex justify-between">
          {[
            {
              image: "/images/artist.png",
              artist: "John Doe",
              artistTitle: "Artist",
            },
            {
              image: "/images/artist.png",
              artist: "John Doe",
              artistTitle: "Artist",
            },
            {
              image: "/images/artist.png",
              artist: "John Doe",
              artistTitle: "Artist",
            },
            {
              image: "/images/artist.png",
              artist: "John Doe",
              artistTitle: "Artist",
            },
          ].map((item, index) => (
            <DiscoveryPicksCard key={index} item={item} />
          ))}
        </div>
      </section>

      <section>
        <h4 className="font-bold text-text-white text-xl mb-8">
          Made for Hayley Marjoram
        </h4>

        <div className="flex justify-between">
          {[
            {
              thumbnail: "/images/playlist.png",
              name: "Electronic",
              description: "A collection of warm and cool sounds",
            },
            {
              thumbnail: "/images/playlist.png",
              name: "Electronic",
              description: "A collection of warm and cool sounds",
            },
            {
              thumbnail: "/images/playlist.png",
              name: "Electronic",
              description: "A collection of warm and cool sounds",
            },
            {
              thumbnail: "/images/playlist.png",
              name: "Electronic",
              description: "A collection of warm and cool sounds",
            },
          ].map((item, index) => (
            <Playlist key={index} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
