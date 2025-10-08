import diningImage from "@/assets/dining.jpg";

const dishes = [
  "Stone-milled millet ugali with seasonal greens and groundnut relish",
  "Githeri (roasted maize & beans) finished with herb oil",
  "Mukimo-style mash with garden peas & pumpkin leaves",
  "Highland honey-glazed goat (nyama choma) with kachumbari",
  "Smoked tilapia with river herbs and lemon",
  "Sun-dried banana fritters with spiced chai",
];

const Dining = () => {
  return (
    <section id="dining" className="py-24 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium animate-fade-in">Culinary Experience</p>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight bg-gradient-to-r from-foreground to-primary/70 bg-clip-text text-transparent">
                Local Cuisine
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Our kitchen celebrates Meru's culinary heritage—heirloom grains, garden vegetables, 
              river fish, and free-range meats—prepared with traditional wisdom and contemporary elegance.
            </p>
            
            <h3 className="font-serif text-3xl font-semibold mb-6 text-foreground">
              Signature Dishes
            </h3>
            <ul className="space-y-4 mb-10">
              {dishes.map((dish, index) => (
                <li key={index} className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <span className="text-primary mt-1.5 text-xl group-hover:scale-125 group-hover:rotate-90 transition-all duration-300">✦</span>
                  <span className="text-muted-foreground font-light leading-relaxed group-hover:text-foreground transition-colors">{dish}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4 pt-4">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <strong className="text-primary font-semibold group-hover:text-accent transition-colors">Chef's Table:</strong> A four-course tasting journey through Meru staples (by reservation)
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <strong className="text-primary font-semibold group-hover:text-accent transition-colors">Market-to-Table:</strong> Morning market visit followed by an immersive cooking class
                </p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-elegant border-4 border-primary/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={diningImage}
                alt="Local Meru cuisine"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
