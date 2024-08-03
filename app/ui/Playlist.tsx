export default function Playlist({
  item,
}: {
  item: { thumbnail: string; name: string; description: string };
}) {
  return (
    <div className="w-[232px] h-[319px] p-4 space-y-4 bg-text-white bg-opacity-5 rounded-[12px]">
      <img
        src={item.thumbnail}
        alt="Playlist cover Image"
        className="w-[200px] h-[200px]"
      />

      <div>
        <p className="text-text-white text-[16px] font-bold">{item.name}</p>
        <p className="text-text-white text-opacity-50">{item.description}</p>
      </div>
    </div>
  );
}
