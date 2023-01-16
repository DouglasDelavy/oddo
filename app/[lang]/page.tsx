import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/navbar";

export default async function Home() {
  return (
    <div className="w-screen h-screen px-4 py-8 flex flex-col items-center ">
      <NavBar />

      <main className="flex-grow">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
