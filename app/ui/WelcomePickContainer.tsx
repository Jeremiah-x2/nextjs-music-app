type WelcomePickType = {
  thumbnail: string;
  name: string;
};

export default function WelcomePickContainer({
  item,
}: {
  item: WelcomePickType;
}) {
  return (
    <div className="bg-white bg-opacity-20 w-[320px] flex items-center gap-4 rounded-[8px]">
      <img
        src={item.thumbnail}
        alt="Thumbnail image for a song"
        className="w-[80px] h-[80px]"
      />
      <p className="font-bold text-[#fff]">{item.name}</p>
    </div>
  );
}
