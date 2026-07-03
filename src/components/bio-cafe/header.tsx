"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, Leaf, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { site, whatsappLink } from "@/lib/site";

const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#filosofia", label: "Filosofia Bio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer to the next frame so the SSR placeholder renders first, avoiding a
    // Radix useId (aria-controls) hydration mismatch, and to keep the setState
    // out of the synchronous effect body.
    const raf = requestAnimationFrame(() => setMounted(true));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 sm:h-18 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="#topo"
            className="flex items-center gap-2 group"
            aria-label={`${site.name} — início`}
          >
            <span
              className={`flex items-center justify-center size-9 rounded-full transition-colors ${
                scrolled ? "bg-primary text-primary-foreground" : "bg-white/90 text-primary"
              }`}
            >
              <Leaf className="size-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={`font-serif text-lg sm:text-xl font-semibold tracking-tight transition-colors ${
                  scrolled ? "text-foreground" : "text-white drop-shadow-sm"
                }`}
              >
                {site.name}
              </span>
              <span
                className={`text-[10px] sm:text-xs uppercase tracking-[0.18em] transition-colors ${
                  scrolled ? "text-muted-foreground" : "text-white/85 drop-shadow-sm"
                }`}
              >
                {site.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary/10 ${
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-full">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Pedir no WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu */}
          {mounted ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`md:hidden ${scrolled ? "" : "text-white hover:bg-white/10 hover:text-white"}`}
                  aria-label="Abrir menu"
                >
                  <MenuIcon className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0">
                <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 px-6 h-16 border-b border-border">
                    <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground">
                      <Leaf className="size-4" />
                    </span>
                    <span className="font-serif text-base font-semibold">{site.name}</span>
                  </div>
                  <nav className="flex flex-col p-4 gap-1">
                    {NAV.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 border-t border-border">
                    <Button asChild className="w-full rounded-full">
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="size-4" />
                        Pedir no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            // Static placeholder rendered during SSR + before hydration to avoid
            // Radix useId aria-controls mismatch between server and client.
            <span
              className={`md:hidden inline-flex items-center justify-center size-9 ${
                scrolled ? "" : "text-white"
              }`}
              aria-hidden="true"
            >
              <MenuIcon className="size-6" />
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
