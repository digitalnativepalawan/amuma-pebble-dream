import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
  { label: "Vision", href: "#vision" },
  { label: "Proof", href: "#proof" },
  { label: "Model", href: "#model" },
  { label: "Long Beach", href: "#longbeach" },
  { label: "Calculator", href: "#calculator" },
  { label: "Portal", href: "#portal" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "Join", href: "#join" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-6">
        <a href="#" className="font-display text-xl font-bold text-primary uppercase tracking-[0.2em]">
          AMUMA
        </a>
        <button
          onClick={() => setOpen(true)}
          className="p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="bg-background/95 backdrop-blur-xl w-72 border-l border-border">
          <SheetHeader>
            <SheetTitle className="font-display text-lg text-primary uppercase tracking-[0.2em]">AMUMA</SheetTitle>
          </SheetHeader>
          <nav className="mt-10 flex flex-col">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-0 py-3 border-b border-border text-foreground/70 hover:text-primary transition-colors font-body text-sm tracking-wide"
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
