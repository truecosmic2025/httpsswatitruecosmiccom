import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is this coaching?",
      answer: "It's a clarity & diagnostic call, not a full coaching session. You'll still leave with a concrete End sentence, one tool to start with, and insight into your main pattern.",
    },
    {
      question: "Do I leave with a full plan?",
      answer: "You'll leave with a focused starting point: End state, technique, and micro-step. If you want a full, structured plan, Amara will explain the coaching options.",
    },
    {
      question: "Do I need Neville experience?",
      answer: "No. If you're brand new, Amara will keep it simple. If you're advanced, she'll help refine and deepen what you already do.",
    },
    {
      question: "Is it really free?",
      answer: "Yes. There's no charge for this 30-minute consult. If you choose to coach with Amara afterwards, pricing and options will be clearly explained.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#16213e]" />
      <div className="container max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur border border-border/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
