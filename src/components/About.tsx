const About = () => {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium">Our Story</p>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  A Highland Sanctuary
                </h2>
              </div>
              
              <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
                <p>
                  Perched at 1,500 meters in the lush Meru highlands, <strong className="text-foreground font-semibold">Thagana Glen Hotel</strong> is 
                  where indigenous forest meets open sky—a serene escape designed for modern travelers seeking authentic connection.
                </p>
                <p>
                  Our thoughtfully curated spaces blend contemporary comfort with local artistry, while our kitchen celebrates 
                  Meru's rich culinary traditions using seasonal, locally-sourced ingredients.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
                <p className="text-lg text-foreground leading-relaxed italic">
                  "From sunrise Mt. Kenya lookouts to guided farm walks, every experience invites you to slow down, 
                  explore deeply, and savor the genuine warmth of highland hospitality."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
