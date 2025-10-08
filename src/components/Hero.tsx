import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-block px-6 py-2 border-2 border-primary/30 rounded-full mb-8">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-medium">Meru Highlands</p>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-foreground animate-fade-in tracking-tight">
            Thagana Glen
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in font-light">
            Where mountain vistas meet warm Kenyan hospitality in a boutique highland sanctuary
          </p>
          
          <div className="pt-8 animate-fade-in">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-12 py-7 rounded-full shadow-elegant transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Discover Your Retreat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
