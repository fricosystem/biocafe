import { Star, Leaf, Clock, MapPin } from "lucide-react";

const items = [
  { icon: Star, title: "Avaliado no Google", subtitle: "Clientes felizes em Pinheiros" },
  { icon: Leaf, title: "100% Orgânicos", subtitle: "Ingredientes frescos e de estação" },
  { icon: Clock, title: "Almoço todo dia", subtitle: "Pratos do dia que mudam sempre" },
  { icon: MapPin, title: "Teodoro Sampaio", subtitle: "No coração de Pinheiros, SP" },
];

export function TrustBar() {
  return (
    <section aria-label="Destaques" className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15">
          {items.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="flex items-center gap-3 sm:gap-4 px-3 sm:px-5 py-5 sm:py-6"
            >
              <span className="flex-shrink-0 flex items-center justify-center size-10 sm:size-11 rounded-full bg-white/15">
                <Icon className="size-5 sm:size-5" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-sm sm:text-base leading-tight truncate">
                  {title}
                </p>
                <p className="mt-0.5 text-xs sm:text-sm text-primary-foreground/75 leading-tight truncate">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
