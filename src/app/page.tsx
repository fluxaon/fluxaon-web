import Header from "@/components/Header";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Metodologia from "@/components/sections/Metodologia";
import PorQue from "@/components/sections/PorQue";
import QueHacemos from "@/components/sections/QueHacemos";
import Soluciones from "@/components/sections/Soluciones";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QueHacemos />
        <Metodologia />
        <Soluciones />
        <PorQue />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
