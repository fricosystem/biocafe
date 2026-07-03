import Image from "next/image";
import { Sprout, HeartHandshake, Recycle } from "lucide-react";
import { cafePhotos } from "@/lib/cafe-photos";

const pillars = [
  {
    icon: Sprout,
    title: "Ingredientes Frescos",
    description:
      "Compramos de produtores locais e parceiros de agricultura familiar. O que chega à sua mesa saiu da horta há poucas horas.",
  },
  {
    icon: HeartHandshake,
    title: "Orgânicos & Conscientes",
    description:
      "Priorizamos orgânicos certificados, sem agrotóxicos, respeitando o solo, a safra e quem planta. Sabor de verdade, do começo ao fim.",
  },
  {
    icon: Recycle,
    title: "Alimentação Consciente",
    description:
      "Cozinha de aproveitamento integral, embalagens compostáveis e desperdício mínimo. Cuidar de você inclui cuidar do planeta.",
  },
];

const stats = [
  { value: "100%", label: "fresco e de estação" },
  { value: "0", label: "agrotóxicos nos orgânicos" },
  { value: "Diário", label: "cardápio renovado" },
];

export function FilosofiaSection() {
  return (
    <section id="filosofia" className="py-20 sm:py-28 bg-secondary/60 scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image with floating stat card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={cafePhotos.scoopingFruits}
                alt="Mão enluvada servindo frutas secas frescas no Bio Café & Co."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-background rounded-2xl shadow-lg border border-border p-4 sm:p-5 max-w-[230px]">
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-primary leading-none">
                100%
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                ingredientes frescos e de estação, todos os dias
              </p>
            </div>
          </div>

          {/* Intro text */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-primary border border-border">
              <Sprout className="size-3.5" />
              Filosofia Bio
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Comer bem é um gesto de cuidado com você e com o mundo.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Nascemos da vontade de oferecer um almoço honesto, saboroso e que faz
              bem. Aqui, cada prato começa antes da cozinha: na escolha de quem planta,
              no respeito ao tempo da natureza e na simplicidade de um tempero de verdade.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Acreditamos que alimentação natural não precisa ser complicada — só
              precisa ser fresca, consciente e feita com carinho.
            </p>

            {/* Horizontal stats strip */}
            <div className="mt-7 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-background border border-border px-3 py-3 text-center"
                >
                  <p className="font-serif text-xl sm:text-2xl font-semibold text-primary leading-none">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[11px] sm:text-xs text-muted-foreground leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 pillars — horizontal row */}
        <div className="mt-14 sm:mt-16 grid sm:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl bg-background border border-border p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <span className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
