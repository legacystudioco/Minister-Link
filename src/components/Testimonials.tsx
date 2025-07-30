import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Pastor Michael Thompson",
      role: "Senior Pastor, Grace Community Church",
      content: "FaithCast connected us with Pastor Sarah for our revival week. Her messages were powerful and exactly what our congregation needed. The platform made finding the right speaker so simple.",
      rating: 5,
      type: "church"
    },
    {
      name: "Rev. David Martinez",
      role: "Evangelist & Conference Speaker",
      content: "Since joining FaithCast, I've been able to serve 15 churches across three states. The platform helps me focus on ministry while they handle the connections. It's been a game-changer for my calling.",
      rating: 5,
      type: "speaker"
    },
    {
      name: "Dr. Ruth Anderson",
      role: "Youth Pastor, Cornerstone Fellowship",
      content: "We needed a women's conference speaker on short notice. FaithCast delivered! We found Dr. Rachel within days, and she exceeded all our expectations. Our ladies are still talking about it.",
      rating: 5,
      type: "church"
    },
    {
      name: "Pastor James Wilson",
      role: "Teaching Pastor & Author",
      content: "FaithCast has opened doors I never knew existed. I've spoken at camps, conferences, and guest sermons through this platform. The churches are wonderful and the booking process is seamless.",
      rating: 5,
      type: "speaker"
    },
    {
      name: "Lisa Chen",
      role: "Event Coordinator, New Life Church",
      content: "Planning our annual men's retreat was stress-free thanks to FaithCast. We found Pastor John who brought exactly the energy and biblical truth our men needed. Highly recommend!",
      rating: 5,
      type: "church"
    },
    {
      name: "Dr. Robert Hayes",
      role: "Bible Teacher & Conference Speaker",
      content: "The quality of opportunities on FaithCast is exceptional. Every church I've served through this platform has been well-organized and truly seeking God's word. It's ministry at its finest.",
      rating: 5,
      type: "speaker"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Testimonies of Faith
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from pastors, speakers, and church leaders who are making eternal impact through FaithCast
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-divine transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <Quote className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    testimonial.type === 'speaker' 
                      ? 'bg-primary-lighter text-primary' 
                      : 'bg-secondary-lighter text-secondary'
                  }`}>
                    {testimonial.type === 'speaker' ? 'Speaker' : 'Church Leader'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;