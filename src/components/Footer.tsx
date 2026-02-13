import logo from "@/assets/thagana-logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Thagana Glen</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              A boutique highland retreat in Meru, Kenya where authentic hospitality meets mountain serenity.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-sm tracking-wide uppercase">Quick Links</h4>
            <nav className="space-y-3">
              {['rooms', 'dining', 'experiences', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors capitalize font-light"
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-sm tracking-wide uppercase">Connect</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p>reservations@thaganaglen.co.ke</p>
              <p>info@thaganaglen.co.ke</p>
              <p>Meru County, Kenya</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-8 text-center text-sm text-muted-foreground font-light">
          <p>© 2025 Thagana Glen Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
