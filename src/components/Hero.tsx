import { Button } from "@/components/ui/button";
import heroImage from "@/assets/photorealistic-scene-wild-elephants.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-primary/10 overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Content */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
            {/* Tagline */}
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm animate-fadeIn">
              <p className="text-xs sm:text-sm md:text-base tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 font-medium">
                Meru Highlands
              </p>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80 drop-shadow-md animate-fadeIn">
              Thagana Glen
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-md mx-auto md:mx-0 leading-relaxed font-light animate-fadeIn">
              Discover a boutique highland sanctuary where mountain vistas blend with warm Kenyan hospitality.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start animate-fadeIn">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Book Your Retreat
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Explore More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl animate-fadeIn order-1 md:order-2">
            <img
              src={heroImage}
              alt="Thagana Glen Highland Sanctuary"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;