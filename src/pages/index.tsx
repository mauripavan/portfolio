import { Inter } from "next/font/google";
import NavBar from "@component/components/Navbar";
import MainSection from "@component/components/MainSection";
import AboutMeSection from "@component/components/AboutMeSection";
import TechSection from "@component/components/TechSection";
import PortfolioSection from "@component/components/PortfolioSection";
import ContactSection from "@component/components/ContactSection";
import Footer from "@component/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col text-white ${inter.className}`}
    >
      <NavBar />
      <MainSection />
      <AboutMeSection />
      <TechSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
