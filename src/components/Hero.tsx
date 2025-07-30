import { Button } from "@/components/ui/button";
import { Mic, Church, Music } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Church sanctuary" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-earth/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Connect
          <span className="text-secondary block md:inline md:ml-4">
            Ministry & Music
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
          The premier platform connecting churches with inspiring speakers, talented musicians, 
          and worship leaders for guest sermons, revivals, conferences, and special events.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="divine" size="lg" className="text-lg px-6 py-4 h-auto">
            <Mic className="w-5 h-5 mr-2" />
            Create Speaker Profile
          </Button>
          
          <Button variant="hero" size="lg" className="text-lg px-6 py-4 h-auto">
            <Music className="w-5 h-5 mr-2" />
            Create Musician Profile
          </Button>
          
          <Button variant="hero" size="lg" className="text-lg px-6 py-4 h-auto">
            <Church className="w-5 h-5 mr-2" />
            Post Opportunity
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-secondary mb-2">750+</div>
            <div className="text-sm opacity-90">Speakers & Musicians</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-secondary mb-2">1,200+</div>
            <div className="text-sm opacity-90">Churches Connected</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-secondary mb-2">2,800+</div>
            <div className="text-sm opacity-90">Successful Bookings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;