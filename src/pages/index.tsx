import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@component/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col text-white ${inter.className}`}
    >
      <NavBar />
    </main>
  );
}
