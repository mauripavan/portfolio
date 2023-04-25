import { Inter } from "next/font/google";
import NavBar from "@component/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col text-white ${inter.className}`}
    >
      <NavBar />
      <div
        className={"flex flex-1 font-space mx-28 tracking-wider min-h-screen"}
      >
        <div className={"flex flex-col flex-1  justify-center"}>
          <div className="h-2 bg-white w-36 mb-12" />
          <p className="text-7xl font-bold">I'm Mauricio, Front End Dev</p>
          <p className="font-normal text-gray-light mt-4 text-lg">
            Welcome to my website. Let's take a look to some of my jobs!
          </p>
          <div className="flex items-center justify-center bg-blue h-32 w-32 rounded-full mt-20">
            <p>v</p>
          </div>
        </div>

        <div
          className={"flex flex-1 flex-col  justify-center items-end text-lg"}
        >
          <div className="w-3/5 border-b border-gray mt-12">
            <p className="font-bold">TECH STACK</p>
            <p className="mt-4 mb-8 font-thin text-gray-light">
              Discover the technologies I use to develop both, mobile apps and
              web sites, as well as the last proyects in which I've been working
              on.
            </p>
            <p className="mb-12 w-fit border-b-2 border-gray-dark h-9">
              LEARN MORE
            </p>
          </div>

          <div className="w-3/5 border-b border-gray mt-12">
            <p className="font-bold">CONTACT ME</p>
            <p className="mt-4 mb-8 font-thin text-gray-light">
              Do you have something in mind to create? Let's chat! Complete the
              form, we can create amazing things togheter.
            </p>
            <p className="mb-12 w-fit border-b-2 border-gray-dark h-9">
              COMPLETE FORM
            </p>
          </div>

          <div className="w-3/5 mt-12">
            <p className="font-bold font-bold">FOLLOW ME</p>
          </div>
        </div>
      </div>
    </main>
  );
}
