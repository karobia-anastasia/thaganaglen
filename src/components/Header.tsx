import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/thagana-logo.png";
import { Menu, X } from "lucide-react"; // Using Lucide icons (can be replaced with others)

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close menu on mobile after clicking
    }
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
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Thagana Glen Hotel" className="h-12 w-auto" />
          </div>

          {/* Desktop Nav */}
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

          {/* Book Button (always visible) */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-soft transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-background px-4 pb-4 pt-2 shadow-md">
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("dining")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Dining
            </button>
            <button
              onClick={() => scrollToSection("experiences")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Experiences
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors text-left"
            >
              Contact
            </button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full"
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/thagana-logo.png";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-md shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <img src={logo} alt="Thagana Glen Hotel" className="h-12 w-auto" />
//           </div>
          
//           <nav className="hidden md:flex items-center gap-8">
//             <button
//               onClick={() => scrollToSection("rooms")}
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Rooms
//             </button>
//             <button
//               onClick={() => scrollToSection("dining")}
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Dining
//             </button>
//             <button
//               onClick={() => scrollToSection("experiences")}
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Experiences
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Contact
//             </button>
//           </nav>

//           <Button
//             onClick={() => scrollToSection("contact")}
//             className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-soft transition-all duration-300 hover:shadow-lg hover:scale-105"
//           >
//             Book Now
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
