import { Button } from "@/components/ui/button";
import { Check, Star, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Create speaker profile",
        "Browse speaking opportunities",
        "Basic messaging",
        "Community support",
        "Mobile app access"
      ],
      cta: "Get Started Free",
      popular: false,
      icon: Star
    },
    {
      name: "Pro Speaker",
      price: "$29",
      period: "/month",
      description: "For serious ministry professionals",
      features: [
        "Everything in Basic",
        "Featured profile placement",
        "Unlimited messaging",
        "Calendar integration",
        "Priority support",
        "Sermon upload library",
        "Advanced analytics",
        "Direct contact information"
      ],
      cta: "Upgrade to Pro",
      popular: true,
      icon: Crown
    },
    {
      name: "Church Premium",
      price: "$49",
      period: "/month",
      description: "For churches and organizations",
      features: [
        "Multiple event postings",
        "Priority speaker matching",
        "Team collaboration tools",
        "Event management dashboard",
        "Custom branding",
        "Dedicated account manager",
        "Speaker verification reports",
        "Bulk messaging capabilities"
      ],
      cta: "Start Premium Trial",
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Faithful Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade when you're ready to expand your ministry reach
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-divine ${
                plan.popular 
                  ? 'border-secondary bg-gradient-to-b from-secondary-lighter to-card shadow-warm scale-105' 
                  : 'border-border bg-card shadow-soft hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  plan.popular ? 'bg-secondary' : 'bg-primary'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.popular ? 'text-secondary-foreground' : 'text-primary-foreground'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "divine" : "default"} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include our commitment to biblical integrity and excellent service
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution? <span className="text-primary font-semibold cursor-pointer hover:underline">Contact our team</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;