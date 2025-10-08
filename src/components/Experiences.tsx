import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, TreePine, ShoppingBag } from "lucide-react";

const experiences = [
  {
    icon: Mountain,
    title: "Mt. Kenya Sunrise Drive",
    description: "Pre-dawn lookout and thermos breakfast prepared by our kitchen.",
  },
  {
    icon: TreePine,
    title: "Forest & Farm Walks",
    description: "Guided strolls through indigenous groves and smallholder farms; learn about local herbs and honey.",
  },
  {
    icon: ShoppingBag,
    title: "Market Day in Town",
    description: "Meet producers, sample seasonal fruits, and return for a hands-on cooking session.",
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6 animate-fade-in">Curated Activities</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-fade-in">
            Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light animate-fade-in">
            Connect with the highlands through authentic encounters and mindful exploration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <Card
                key={index}
                className="group text-center hover:shadow-elegant transition-all duration-500 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 hover:border-primary/40 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:shadow-elegant group-hover:scale-105 transition-all duration-500 border-2 border-primary/20 group-hover:border-primary/40">
                    <Icon className="w-12 h-12 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  </div>
                  <CardTitle className="font-serif text-3xl text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                    {experience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground font-light group-hover:text-foreground transition-colors duration-300">
                    {experience.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
