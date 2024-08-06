import { CheckCircleIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";
import Player from "./player";
const token = `BQAAkSBs8tqsN2KQZREuCljq0w5B5idGW_VJATsR6wqJ8PZlTXrVA33bAOiCjVdgG3LVAISSWSxGir7Xzb_PpWBw5ckM-4q7cjYbWXubD4rGsKJwl6E`;

async function getArtist() {
  console.log("Fetching data...");
  const res: Response = await fetch(
    "https://api.spotify.com/v1/artists/1Xq1gv1FyECCWgSyTP0dN3",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await res.json();
}

async function getArtistPopular() {
  console.log("Fetching artist popular songs...");
  const res: Response = await fetch(
    "https://api.spotify.com/v1/artists/1Xq1gv1FyECCWgSyTP0dN3/top-tracks",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await res.json();
}

export default async function ArtistPage() {
  const data = await getArtist();
  const topTracks = await getArtistPopular();
  console.log(topTracks);

  return (
    <main className="text-text-white w-full">
      <Suspense fallback={<div className="text-3xl">Loading...</div>}>
        <ArtistInfo data={data} />
      </Suspense>

      <Player />

      <Suspense fallback={<div className="text-3xl">Loading...</div>}>
        <ArtistPopularTracks topTracks={topTracks} />
      </Suspense>
    </main>
  );
}

function ArtistInfo({ data }: { data: any }) {
  return (
    <section className="h-[438px] w-full before:content-[''] relative before:absolute before:w-full before:h-full before:bg-gradient-to-b from-white to-[#000000] before:opacity-50">
      <div className="w-full h-full border-2 border-purple-900">
        <img
          src={data.images[0].url}
          alt={data.images[0].url}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full space-y-[20px] flex items-end pl-6 pb-16">
        <div>
          <p className="flex items-center gap-4">
            <CheckCircleIcon stroke="#EAEAEA" width={18} height={18} />{" "}
            <span>Verified Artist</span>
          </p>
          <p className="text-[100px] font-bold">{data.name}</p>
          <p>{data.followers.total} followers</p>
        </div>
      </div>

      <section>
        <div className="flex items-center gap-6">
          <button className="w-[60px] h-[60px] bg-green flex rounded-full items-center justify-center">
            <PlayIcon strokeWidth={0} fill="white" width={40} />
          </button>
          <button className="w-[164px] h-[48px] border-[1px] border-white rounded-full">
            Following
          </button>
        </div>
      </section>
    </section>
  );
}

function ArtistPopularTracks({ topTracks }: { topTracks: any }) {
  return (
    <section className="space-y-8 px-6 py-7 mt-16">
      <h4 className="text-3xl font-bold">Popular</h4>
      {topTracks.tracks.slice(0, 5).map((item: any, index: number) => (
        <div key={index} className="flex items-center gap-4">
          <img
            src={item.album.images[item.album.images.length - 1].url}
            alt="Album Cover"
          />
          <div className="flex justify-between flex-grow">
            <div>
              <p className="text-text-white">{item.name}</p>
              <p className="text-text-white text-opacity-50 text-[12px]">
                {item.album.name}
              </p>
            </div>
            <div>{item.popularity}</div>
            <div>{item.duration_ms}</div>
          </div>
          {/* <p className="text-wrap w-full bg-red-600">
        {JSON.stringify(item.album)}
      </p> */}
        </div>
      ))}
    </section>
  );
}
