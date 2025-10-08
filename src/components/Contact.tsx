import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6">Get in Touch</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Plan Your Escape
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Let our team craft a personalized highland experience for you
            </p>
          </div>

          <Card className="shadow-elegant border-border/30 bg-gradient-to-br from-card to-secondary/10">
            <CardContent className="space-y-10 pt-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center gap-4 group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <Mail className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-foreground">Email</p>
                    <a
                      href=""
                      className="text-muted-foreground hover:text-primary transition-colors font-light"
                    >
                      info@thaganaglen.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <Mail className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-foreground">Email</p>
                    <a
                      href="mailto:reservations@thaganaglen.co.ke"
                      className="text-muted-foreground hover:text-primary transition-colors break-all font-light"
                    >
                      reservations@thaganaglen.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4 group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <MapPin className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-foreground">Location</p>
                    <p className="text-muted-foreground font-light">
                      Meru County, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-6">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 rounded-full shadow-elegant transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Check Availability
                </Button>
              </div>

              <div className="border-t border-border/30 pt-8 text-center text-sm text-muted-foreground space-y-3 font-light">
                <p>
                  <strong className="text-foreground font-medium">Getting Here:</strong> By road from Nairobi (A2/Nanyuki route); by air via Nanyuki 
                  or Meru airstrips with arranged transfer.
                </p>
                <p>
                  <strong className="text-foreground font-medium">Cancellation Policy:</strong> Free up to 48 hours before arrival; thereafter, first night charged.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
