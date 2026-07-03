import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[68px]">
          <div className="flex items-center">
            <a href="#inicio" className="font-display text-xl md:text-2xl font-bold text-warm-white hover:text-warm-white/90 transition-colors tracking-tight">
              <span className="text-bright-green">Se</span> Juega
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <a href="#ventajas" className="text-muted-foreground hover:text-warm-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Ventajas
              </a>
              <a href="#como-funciona" className="text-muted-foreground hover:text-warm-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
                ¿Cómo Funciona?
              </a>
              <a href="#ranking" className="text-muted-foreground hover:text-warm-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Ranking
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-warm-white transition-colors px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </a>
            </div>
          </div>

          {/* Desktop CTA button */}
          <div className="hidden md:block">
            <Button variant="cta" size="lg">
              <a href="#cta">Registrate Gratis!</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="sm" className="text-warm-white hover:text-electric-yellow">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="text-electric-yellow text-center">Menú</DrawerTitle>
                </DrawerHeader>
                <div className="px-6 pb-6 space-y-4">
                  <DrawerClose asChild>
                    <a href="#ventajas" className="block text-warm-white hover:text-electric-yellow transition-colors py-3 text-lg font-medium border-b border-border">
                      Ventajas
                    </a>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <a href="#como-funciona" className="block text-warm-white hover:text-electric-yellow transition-colors py-3 text-lg font-medium border-b border-border">
                      ¿Cómo Funciona?
                    </a>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <a href="#ranking" className="block text-warm-white hover:text-electric-yellow transition-colors py-3 text-lg font-medium border-b border-border">
                      Ranking
                    </a>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <a href="#faq" className="block text-warm-white hover:text-electric-yellow transition-colors py-3 text-lg font-medium border-b border-border">
                      FAQ
                    </a>
                  </DrawerClose>
                  <div className="pt-4">
                    <DrawerClose asChild>
                      <Button variant="cta" size="lg" className="w-full">
                        <a href="#cta">Registrate Gratis!</a>
                      </Button>
                    </DrawerClose>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
