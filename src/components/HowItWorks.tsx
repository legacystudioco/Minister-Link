import { UserPlus, Search, MessageSquare, Calendar, CheckCircle, Music } from "lucide-react";

const HowItWorks = () => {
  const speakerSteps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Build a compelling speaker profile with your bio, speaking topics, sample sermons, and availability calendar."
    },
    {
      icon: Search,
      title: "Discover Opportunities",
      description: "Browse speaking opportunities that match your calling, from guest sermons to revival meetings and conferences."
    },
    {
      icon: MessageSquare,
      title: "Connect & Apply",
      description: "Reach out to churches and ministry leaders. Share your heart and vision for their specific event."
    },
    {
      icon: CheckCircle,
      title: "Serve & Impact",
      description: "Deliver powerful messages that transform lives and build lasting relationships with ministry partners."
    }
  ];

  const churchSteps = [
    {
      icon: Calendar,
      title: "Post Your Event",
      description: "Create a detailed listing for your speaking or music opportunity, including date, style preferences, and event details."
    },
    {
      icon: Search,
      title: "Review Talent",
      description: "Browse qualified speakers and musicians, watch samples, and review testimonials from other churches."
    },
    {
      icon: MessageSquare,
      title: "Interview & Select",
      description: "Connect with potential speakers or musicians, conduct interviews, and choose the perfect fit for your congregation."
    },
    {
      icon: CheckCircle,
      title: "Host & Bless",
      description: "Welcome your ministry team and watch God move as they serve your church family."
    }
  ];

  const musicianSteps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Build a compelling musician profile with your background, musical styles, sample recordings, and availability."
    },
    {
      icon: Search,
      title: "Find Opportunities",
      description: "Browse worship leading and musical opportunities that match your gifts, from special events to regular services."
    },
    {
      icon: MessageSquare,
      title: "Connect & Audition",
      description: "Reach out to churches and ministry leaders. Share your heart for worship and musical ministry."
    },
    {
      icon: CheckCircle,
      title: "Lead & Worship",
      description: "Use your musical gifts to lead God's people in worship and build lasting ministry relationships."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Preacher Link Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, effective connections that advance God's kingdom through powerful preaching, teaching, and worship.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* For Speakers */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">For Speakers & Pastors</h3>
              <p className="text-muted-foreground">Expand your ministry reach and serve more churches</p>
            </div>
            
            <div className="space-y-6">
              {speakerSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-lighter rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Churches */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">For Churches & Ministries</h3>
              <p className="text-muted-foreground">Find the perfect speaker or musician</p>
            </div>
            
            <div className="space-y-6">
              {churchSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary-lighter rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Musicians */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-earth-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">For Musicians & Worship Leaders</h3>
              <p className="text-muted-foreground">Share your musical gifts with churches</p>
            </div>
            
            <div className="space-y-6">
              {musicianSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-earth-lighter rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-earth" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;