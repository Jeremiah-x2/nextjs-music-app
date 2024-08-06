import { HeartIcon } from "@heroicons/react/24/outline";

export default function page() {
  return (
    <main className="relative">
      <section className="h-[438px]">
        <div className="">
          <div className="w-[282px] h-[283px] ">
            <HeartIcon fill="white" stroke="white" strokeWidth={0} />
          </div>

          <div className="">
            <p>ALBUM</p>
            <p>Liked Songs</p>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
