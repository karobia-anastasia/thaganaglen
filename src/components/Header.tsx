import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/thagana-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Thagana Glen Hotel" className="h-12 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("dining")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Dining
            </button>
            <button
              onClick={() => scrollToSection("experiences")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experiences
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-soft transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
