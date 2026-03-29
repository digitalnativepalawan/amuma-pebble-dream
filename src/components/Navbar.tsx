import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlocks } from "@/contexts/BlockContext";

const links = [
  { label: "Circle", href: "#vision" },
  { label: "Destinations", href: "#proof" },
  { label: "Investment", href: "#technology" },
  { label: "Experience", href: "#model" },
  { label: "Palawan", href: "#build" },
  { label: "Retreat", href: "#longbeach" },
  { label: "Calculator", href: "#calculator" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "Join", href: "#join" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const { settings } = useBlocks();
  const siteName = settings?.site_name?.text || "My Site";
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
          {siteName}
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
            <SheetTitle className="font-display text-lg text-primary uppercase tracking-[0.2em]">{siteName}</SheetTitle>
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
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="text-left px-0 py-3 border-b border-border text-muted-foreground hover:text-primary transition-colors font-body text-xs tracking-wide uppercase mt-4"
            >
              Admin
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
