import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Languages } from "lucide-react";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col w-full relative">
      <header className="flex items-center justify-between m-5">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-2xl font-[900] font-sans uppercase">Findr</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-lg"
            className="rounded-full hover:bg-accent hover:text-accent-foreground"
          >
            <Languages />
          </Button>
          <Button className="border-2 border-accent hover:bg-accent hover:text-accent-foreground rounded-full bg-white/90">
            <span className="font-semibold text-black uppercase font-sans">
              Se connecter
            </span>
          </Button>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-7xl font-[900] font-sans uppercase">
            Swiper avec facilité
          </h1>
          <Button className="border-2 border-accent hover:bg-accent hover:text-accent-foreground rounded-full bg-white/90">
            <span className="font-semibold text-black uppercase font-sans">
              Créer un compte
            </span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
