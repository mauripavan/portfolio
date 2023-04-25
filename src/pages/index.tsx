import { Inter } from "next/font/google";
import NavBar from "@component/components/Navbar";
import MainSection from "@component/components/MainSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col text-white ${inter.className}`}
    >
      <NavBar />
      <MainSection />
    </main>
  );
}
