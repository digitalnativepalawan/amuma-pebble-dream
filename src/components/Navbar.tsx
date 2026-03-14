import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Proof", href: "#proof" },
  { label: "Model", href: "#model" },
  { label: "Long Beach", href: "#longbeach" },
  { label: "Calculator", href: "#calculator" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "Join", href: "#join" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/70 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-bold text-primary tracking-wider">
          AMUMA
        </a>
        <button
          onClick={() => setOpen(true)}
          className="p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="bg-card/95 backdrop-blur-xl w-72">
          <SheetHeader>
            <SheetTitle className="font-display text-xl text-primary">AMUMA</SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-muted transition-colors font-body text-sm font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
