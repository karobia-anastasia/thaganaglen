import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32 md:py-40">
        <div className="max-w-5xl mx-auto space-y-5 sm:space-y-7 md:space-y-8">
          {/* Tagline */}
          <div className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 border-2 border-primary/30 rounded-full mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-muted-foreground font-medium">
              Meru Highlands
            </p>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-foreground animate-fade-in tracking-tight leading-tight">
            Thagana Glen
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto leading-relaxed animate-fade-in font-light">
            Where mountain vistas meet warm Kenyan hospitality in a boutique
            highland sanctuary.
          </p>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8 animate-fade-in">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-6 sm:px-10 md:px-12 py-4 sm:py-6 md:py-7 rounded-full shadow-elegant transition-all duration-300 hover:shadow-xl hover:scale-105"
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
