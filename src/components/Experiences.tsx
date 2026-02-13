import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Assuming these are your local image paths
import MountainImg from "@/assets/mk1.jpg";
import TreeImg from "@/assets/mk2.jfif";
import MarketImg from "@/assets/mk3.jpg";

const experiences = [
  {
    src: MountainImg,
    title: "Mt. Kenya Sunrise Drive",
    description: "Pre-dawn lookout and thermos breakfast prepared by our kitchen.",
  },
  {
    src: TreeImg,
    title: "Forest & Farm Walks",
    description: "Guided strolls through indigenous groves and smallholder farms; learn about local herbs and honey.",
  },
  {
    src: MarketImg,
    title: "Market Day in Town",
    description: "Meet producers, sample seasonal fruits, and return for a hands-on cooking session.",
  },
];

const Experiences = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6">Curated Activities</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Connect with the highlands through authentic encounters and mindful exploration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="group text-center hover:shadow-2xl transition-all duration-500 border-primary/20 bg-card hover:border-primary/40 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                {/* Circular Image Container */}
                <div className="mx-auto mb-6 w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/60 group-hover:scale-105 transition-all duration-500 shadow-inner">
                  <img 
                    src={experience.src} 
                    alt={experience.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                
                <CardTitle className="font-serif text-2xl text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                  {experience.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground font-light group-hover:text-foreground transition-colors duration-300">
                  {experience.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;