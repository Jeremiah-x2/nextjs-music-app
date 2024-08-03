export default function DiscoveryPicksCard({
  item,
}: {
  item: {
    image: string;
    artist: string;
    artistTitle: string;
  };
}) {
  return (
    <div className="px-4 py-4 space-y-4 w-[232px] h-[319px] bg-text-white bg-opacity-5 rounded-[12px]">
      <img
        src={item.image}
        className="w-[199px] h-[199px] rounded-full"
        alt={`The image of the author of the song ${item.artist}`}
      />
      <div>
        <p className="text-[16px] font-bold text-text-white">{item.artist}</p>
        <p className="text-[14px] text-text-white text-opacity-50">
          {item.artistTitle}
        </p>
      </div>
    </div>
  );
}
