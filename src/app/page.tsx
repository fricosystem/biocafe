import { Header } from "@/components/bio-cafe/header";
import { Hero } from "@/components/bio-cafe/hero";
import { TrustBar } from "@/components/bio-cafe/trust-bar";
import { MenuSection } from "@/components/bio-cafe/menu";
import { FilosofiaSection } from "@/components/bio-cafe/filosofia";
import { GaleriaSection } from "@/components/bio-cafe/galeria";
import { LocalizacaoSection } from "@/components/bio-cafe/localizacao";
import { ContatoSection } from "@/components/bio-cafe/contato";
import { Footer } from "@/components/bio-cafe/footer";
import { WhatsAppFloat } from "@/components/bio-cafe/whatsapp-float";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <MenuSection />
        <FilosofiaSection />
        <GaleriaSection />
        <LocalizacaoSection />
        <ContatoSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
