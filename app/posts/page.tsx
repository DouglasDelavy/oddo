import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";

export default function Post() {
  return (
    <div className="w-screen h-screen px-20 py-8 flex flex-col items-center bg-zinc-800">
      <NavBar />

      <main className="flex-grow">
        <h1>POSTS</h1>
      </main>

      <Footer />
    </div>
  );
}
