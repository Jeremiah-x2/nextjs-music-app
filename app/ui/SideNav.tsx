import Link from "next/link";
import { AddBtnGradientBg, AddBtnPlainBG } from "./Button";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

type LinkType = { route: string; text: string; icon?: any };

const links_1: LinkType[] = [
  { route: "/", text: "Home", icon: <HomeIcon height={21.25} width={19.69} /> },
  {
    route: "/search",
    text: "Search",
    icon: <MagnifyingGlassIcon height={21.25} width={19.69} />,
  },
  {
    route: "your-library",
    text: "Your Library",
    icon: <BookOpenIcon height={21.25} width={19.69} />,
  },
];

const links_2: LinkType[] = [
  {
    route: "create-playlist",
    text: "Create Playlist",
    icon: <AddBtnPlainBG />,
  },
  { route: "likes-songs", text: "Liked Songs", icon: <AddBtnGradientBg /> },
];

export default function SideNav() {
  return (
    <section>
      <ul className="space-y-[24px] mb-[32px]">
        {links_1.map((item: LinkType, index: number) => (
          <li key={index}>
            <Link href={item.route} className="flex gap-4 items-center">
              {item.icon}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="space-y-[24px]">
        {links_2.map((item: LinkType, index: number) => (
          <li key={index}>
            <Link href={item.route} className="flex gap-4">
              {item.icon}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
