import { Button } from "@/components/ui/button";
import { Mic, Church, Music, ArrowRight } from "lucide-react";

const Callouts = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-earth">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Speaker Callout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-white">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
              <Mic className="w-8 h-8 text-secondary-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              Are You Called to Speak?
            </h3>
            
            <p className="text-lg mb-6 opacity-95 leading-relaxed">
              Join hundreds of pastors, evangelists, and Christian speakers who are expanding their ministry reach through Preacher Link. Whether you're looking for guest preaching opportunities, revival meetings, or conference speaking engagements, we'll help you connect with churches that need your unique calling.
            </p>
            
            <ul className="space-y-3 mb-8 text-white/90">
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-secondary" />
                Create your speaker profile in minutes
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-secondary" />
                Browse opportunities that match your calling
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-secondary" />
                Build lasting ministry relationships
              </li>
            </ul>
            
            <Button variant="divine" size="lg" className="w-full sm:w-auto">
              <Mic className="w-5 h-5 mr-2" />
              Create Speaker Profile
            </Button>
          </div>

          {/* Church Callout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-white">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
              <Church className="w-8 h-8 text-secondary-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              Need a Guest Preacher?
            </h3>
            
            <p className="text-lg mb-6 opacity-95 leading-relaxed">
              Find the perfect speaker for your next event, conference, revival, or guest sermon. Our platform connects you with qualified, verified speakers who share your heart for ministry and can deliver exactly what your congregation needs to hear.
            </p>
            
            <ul className="space-y-3 mb-8 text-white/90">
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-secondary" />
                Post your speaking opportunity for free
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-secondary" />
                Review qualified, verified speakers
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-secondary" />
                Book with confidence and peace of mind
              </li>
            </ul>
            
            <Button variant="divine" size="lg" className="w-full sm:w-auto">
              <Church className="w-5 h-5 mr-2" />
              Post Speaking Opportunity
            </Button>
          </div>

          {/* Musician Callout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-white">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
              <Music className="w-8 h-8 text-secondary-foreground" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              Ready to Lead Worship?
            </h3>
            
            <p className="text-lg mb-6 opacity-95 leading-relaxed">
              Connect with churches seeking talented musicians, worship leaders, and singers. Share your musical gifts and help congregations experience powerful worship through your ministry.
            </p>
            
            <ul className="space-y-3 mb-8 text-white/90">
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-secondary" />
                Showcase your musical talents and style
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-secondary" />
                Find worship leading opportunities
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-secondary" />
                Build connections with ministry teams
              </li>
            </ul>
            
            <Button variant="divine" size="lg" className="w-full sm:w-auto">
              <Music className="w-5 h-5 mr-2" />
              Create Musician Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Callouts;