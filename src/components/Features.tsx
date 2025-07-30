import { User, Calendar, MessageCircle, Search, Shield, Globe, Zap, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: User,
      title: "Detailed Speaker Profiles",
      description: "Comprehensive profiles with bio, speaking topics, sermon samples, testimonials, and availability calendars."
    },
    {
      icon: Calendar,
      title: "Smart Event Matching",
      description: "Advanced matching system that connects speakers with events based on topics, location, and scheduling preferences."
    },
    {
      icon: MessageCircle,
      title: "Seamless Communication",
      description: "Built-in messaging system for easy communication between churches and speakers throughout the booking process."
    },
    {
      icon: Search,
      title: "Powerful Search & Filters",
      description: "Find exactly what you're looking for with advanced filters for denomination, topic, location, and availability."
    },
    {
      icon: Shield,
      title: "Verified & Trusted",
      description: "All speakers undergo verification process including references, background checks, and doctrinal alignment reviews."
    },
    {
      icon: Globe,
      title: "Nationwide Network",
      description: "Connect with speakers and churches across the country, expanding your ministry reach and impact."
    },
    {
      icon: Zap,
      title: "Quick Booking",
      description: "Streamlined booking process that can have your speaking engagement confirmed in less than 48 hours."
    },
    {
      icon: Heart,
      title: "Ministry-Focused",
      description: "Built by ministry leaders for ministry leaders, with features designed specifically for Christian speaking engagements."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for Ministry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to connect, communicate, and create lasting ministry partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-soft"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;