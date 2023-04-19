import { Public_Sans } from "next/font/google";
import { Navbar, Hero, Features, Articles, Footer } from "./components";

const PublicSans = Public_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}
