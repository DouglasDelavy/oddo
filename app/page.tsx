import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { NavBar } from "../components/navbar";

export default function Home() {
  return (
    <div className="w-screen h-screen px-20 py-8 flex flex-col items-center ">
      <NavBar />

      <main className="flex-grow">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
