import logo from "@/assets/thagana-logo.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border/30 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Grid - 4 Columns for better spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Thagana Glen Logo" className="h-12 w-12 rounded-full object-cover" />
              <h3 className="font-serif text-2xl font-bold text-foreground">Thagana Glen</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-xs">
              A boutique highland retreat in Meru, Kenya where authentic hospitality meets mountain serenity.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-xs tracking-widest uppercase">Navigation</h4>
            <nav className="flex flex-col space-y-3">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="w-fit text-sm text-muted-foreground hover:text-primary transition-colors capitalize font-light"
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-xs tracking-widest uppercase">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-light italic">
              <p className="hover:text-foreground transition-colors cursor-pointer">reservations@thaganaglen.co.ke</p>
              <p className="hover:text-foreground transition-colors cursor-pointer">info@thaganaglen.co.ke</p>
              <p>+254 700 000 000</p>
            </div>
          </div>
          
          {/* Column 4: Location */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-xs tracking-widest uppercase">Location</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p>Meru Highlands</p>
              <p>Near Mt. Kenya National Park</p>
              <p>Meru County, Kenya</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar - Balanced */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-light tracking-wide">
          <p>© 2025-2026 Thagana Glen Hotel. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;