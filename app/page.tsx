import Image from "next/image";
import WelcomePickContainer from "./ui/WelcomePickContainer";
import DiscoveryPicksCard from "./ui/DiscoveryPicksCard";
import Playlist from "./ui/Playlist";

const time = new Date().getHours();
const greeting = time >= 0 && time < 12 ? "Good Morning" : "Good Evening";
export default function Home() {
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
