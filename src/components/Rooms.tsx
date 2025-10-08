import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import roomImage from "@/assets/room-forest.jpg";

const rooms = [
  {
    title: "Forest View Rooms",
    description: "Quiet doubles with private balconies over indigenous trees, rainfall showers, and work-friendly desks.",
    image: roomImage,
  },
  {
    title: "Glen Suites",
    description: "Spacious options for families or longer stays: separate lounge, compact kitchenette, and curated Meru textiles.",
    image: roomImage,
  },
  {
    title: "Mt. Kenya Deluxe",
    description: "Top-floor rooms with panoramic peak views, premium linens, and artisan finishes.",
    image: roomImage,
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6">Accommodations</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Rooms & Suites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Thoughtfully designed spaces that embrace Meru's natural beauty
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {rooms.map((room, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-500 border-border/30 bg-gradient-to-br from-card via-card to-primary/5 h-full">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif text-3xl text-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                      {room.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground font-light">
                      {room.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-primary/30 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="border-primary/30 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>

        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            Standard check-in 2:00 PM · Check-out 10:00 AM · Complimentary Wi-Fi and parking
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
