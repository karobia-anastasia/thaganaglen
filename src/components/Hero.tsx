import { Button } from "@/components/ui/button";
import heroImage from "@/assets/mk5.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* Changed overflow-x-hidden to be more aggressive and ensured max-w-full */
    <section className="relative h-[100svh] w-full overflow-hidden max-w-full">
      
      {/* Background Image - Absolute positioning can sometimes cause overflow if not handled right */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Thagana Glen Highland Sanctuary"
          className="h-full w-full object-cover"
          loading="eager" // Hero images should usually be eager
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        {/* Added max-w-full here to prevent the text block from pushing out */}
        <div className="text-center w-full max-w-4xl space-y-8">
          
          <p className="text-sm tracking-[0.3em] uppercase text-[#4ade80] font-medium">
            Meru Highlands
          </p>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-tight">
            Thagana Glen
          </h1>

          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Discover a boutique highland sanctuary where mountain vistas blend
            seamlessly with warm Kenyan hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#2D6A4F] hover:bg-[#1B4332] rounded-full px-10 h-14 text-lg"
            >
              Book Your Retreat
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-10 h-14 text-lg"
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/photorealistic-scene-wild-elephants.jpg";


//   return (
//     <section className="relative flex items-center justify-center bg-gradient-to-br from-background via-background/90 to-primary/10 overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32">
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
//         {/* On mobile: text first, image second */}
//         {/* On desktop: image right, text left */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
//           {/* Content */}
//           <div className="space-y-5 sm:space-y-6 md:space-y-8 text-center md:text-left order-1 md:order-1">
//             {/* Tagline */}
//             <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm animate-fadeIn">
//               <p className="text-xs sm:text-sm md:text-base tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 font-medium">
//                 Meru Highlands
//               </p>
//             </div>

//             {/* Title */}
//             <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80 drop-shadow-md animate-fadeIn">
//               Thagana Glen
//             </h1>

//             {/* Subtitle */}
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/90 max-w-md mx-auto md:mx-0 leading-relaxed font-light animate-fadeIn">
//               Discover a boutique highland sanctuary where mountain vistas blend with warm Kenyan hospitality.
//             </p>

//             {/* CTA Buttons */}
//             <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start animate-fadeIn">
//               <Button
//                 onClick={scrollToContact}
//                 size="lg"
//                 className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
//               >
//                 Book Your Retreat
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-primary/50 text-primary hover:bg-primary/10 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105"
//               >
//                 Explore More
//               </Button>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl animate-fadeIn order-2 md:order-2">
//             <img
//               src={heroImage}
//               alt="Thagana Glen Highland Sanctuary"
//               className="w-full h-full object-cover object-center"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
