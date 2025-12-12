import { MessageCircleQuestion } from "lucide-react";

const Faq = () => {
  const faqs = [
    {
      q: "What are the cash-out charges?",
      a: "Cash-outs of 1000 Taka or more include a 20 Taka fee, shared between the Agent and Admin.",
    },
    {
      q: "Can I transfer money to other users?",
      a: "Absolutely! You can send money instantly and securely to any registered wallet user.",
    },
    {
      q: "How do agents help with top-ups?",
      a: "Agents can directly add funds to user accounts, making balance management simple and convenient.",
    },
    {
      q: "Is my wallet balance secure?",
      a: "Yes. We use advanced encryption and strict security protocols to keep your money safe.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 px-6">
      <section className="max-w-5xl mx-auto py-16">
        {/* Header */}
        <h1
          className="text-4xl font-bold text-center mb-12 animate-fadeIn"
          style={{ color: "var(--primary)" }}
        >
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card text-card-foreground p-6 rounded-xl shadow hover:shadow-xl hover:bg-secondary transition-transform transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center mb-2">
                <MessageCircleQuestion
                  className="w-6 h-6 mr-2"
                  style={{ color: "var(--primary)" }}
                />
                <h3 className="text-lg font-semibold">{faq.q}</h3>
              </div>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
