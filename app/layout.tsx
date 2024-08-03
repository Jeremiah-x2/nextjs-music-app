import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./ui/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Spotify Clone",
    template: "%s - Spotify Clone",
  },
  description: "A side project to add to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex bg-[#120F0F]">
          <div className="md:w-[280px] md:px-5 py-10 bg-sidefill text-white text-opacity-50 h-[100dvh]">
            <SideNav />
          </div>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
