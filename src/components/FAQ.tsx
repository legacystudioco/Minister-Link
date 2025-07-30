import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is FaithCast for full-time job placements?",
      answer: "No, FaithCast focuses exclusively on short-term speaking opportunities like guest sermons, revivals, conferences, camps, and special events. For full-time pastoral positions, we recommend traditional church staffing services."
    },
    {
      question: "What denominations are welcome on FaithCast?",
      answer: "FaithCast welcomes all Bible-believing Christian denominations. Our platform serves evangelical, mainline, and Pentecostal churches. We require adherence to core Christian doctrines including the Trinity, salvation by grace through faith, and biblical authority."
    },
    {
      question: "How do you verify speakers?",
      answer: "All speakers undergo a comprehensive verification process including pastoral references, background checks, doctrinal alignment review, and sermon sample evaluation. We take the spiritual safety of congregations seriously."
    },
    {
      question: "What types of speaking opportunities are available?",
      answer: "Our platform features guest sermons, revival meetings, youth conferences, women's events, men's retreats, camp speaking, pulpit supply, conference keynotes, workshop teaching, and special seasonal services."
    },
    {
      question: "How much does it cost to use FaithCast?",
      answer: "Basic membership is completely free for both speakers and churches. Pro features are available for $29/month for speakers and $49/month for churches, offering enhanced visibility and additional tools."
    },
    {
      question: "How quickly can I find a speaker?",
      answer: "Many churches find qualified speakers within 24-48 hours. Our matching system and verified speaker database enable rapid connections, though we always recommend allowing adequate time for proper vetting and preparation."
    },
    {
      question: "Do you handle honorariums and travel expenses?",
      answer: "FaithCast facilitates the connection, but financial arrangements are handled directly between churches and speakers. We provide guidelines for fair compensation and travel reimbursement as part of our resources."
    },
    {
      question: "What if a speaking engagement doesn't work out?",
      answer: "While rare, we have resolution processes in place. Our team provides mediation support, and our community ratings system helps maintain quality. We're committed to successful, God-honoring ministry partnerships."
    },
    {
      question: "Can international speakers join the platform?",
      answer: "Currently, FaithCast primarily serves speakers and churches within the United States. We're exploring international expansion but want to ensure proper legal and logistical support first."
    },
    {
      question: "How does FaithCast ensure doctrinal alignment?",
      answer: "Speakers provide detailed doctrinal statements, and churches can specify theological preferences. Our verification process includes doctrinal review, and our search filters help match speakers with compatible church beliefs."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Clear answers to help you understand how FaithCast serves the body of Christ
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-card-foreground hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <p className="text-primary font-semibold cursor-pointer hover:underline">
            Contact our support team
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;