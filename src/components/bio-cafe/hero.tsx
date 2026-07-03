"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle, Leaf, Sprout, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/lib/site";

const badges = [
  { icon: Leaf, label: "Ingredientes frescos" },
  { icon: Sprout, label: "Opções veganas" },
  { icon: Sun, label: "Feito todo dia" },
];

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[100svh] flex items-center overflow-hidden bg-emerald-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFNqystoLssndrmtuu4h1BWuI0xRIIB-L645hZCVdMojcvDrbFJ22scDMdR87hG4udmMPZN-UOvMGmQEY9p48dJ8DmLu4MMOMoYFxP32sAyGCpgJqLDJMCaNoIUBQ2DwbaBvBwZDg=w1080-h1920-k-no"
          alt="Fachada e ambiente do Bio Café & Co. em Pinheiros, São Paulo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark base layer for guaranteed contrast */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Stronger darkening on the left where the text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/65 to-black/40" />
        {/* Bottom fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-medium text-white/95">
            <Leaf className="size-3.5" />
            {site.area} · {site.tagline}
          </span>

          <h1 className="mt-5 font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
            Almoço natural,
            <span className="block italic font-normal text-white/95">feito com afeto.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
            No coração de Pinheiros, servimos pratos do dia, opções vegetarianas e
            veganas, cafés especiais e bebidas naturais preparados com ingredientes
            frescos e orgânicos. Bem-vindo ao {site.name}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="rounded-full text-base h-12 px-7">
              <a href="#menu">
                Conheça nosso menu
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-base h-12 px-7 bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20 hover:text-white"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Faça seu pedido
              </a>
            </Button>
          </div>

          {/* Badges */}
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-white/90">
                <span className="flex items-center justify-center size-7 rounded-full bg-white/15 border border-white/25">
                  <Icon className="size-3.5" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#menu"
        aria-label="Rolar para o menu"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Explorar</span>
        <span className="flex items-center justify-center size-9 rounded-full border border-white/40 animate-bounce">
          <ArrowRight className="size-4 rotate-90" />
        </span>
      </a>
    </section>
  );
}
