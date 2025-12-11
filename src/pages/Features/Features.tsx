import {
  ShieldCheck,
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  Send,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Save Money",
      desc: "Securely save your money in your digital wallet.",
      icon: (
        <Wallet className="w-10 h-10" style={{ color: "var(--primary)" }} />
      ),
    },
    {
      title: "Top-up Money",
      desc: "Easily top-up your wallet balance from agents.",
      icon: (
        <ArrowUpCircle
          className="w-10 h-10"
          style={{ color: "var(--primary)" }}
        />
      ),
    },
    {
      title: "Withdraw Money",
      desc: "Withdraw cash instantly with service charges applied.",
      icon: (
        <ArrowDownCircle
          className="w-10 h-10"
          style={{ color: "var(--primary)" }}
        />
      ),
    },
    {
      title: "Send Money",
      desc: "Transfer money securely to other users in seconds.",
      icon: <Send className="w-10 h-10" style={{ color: "var(--primary)" }} />,
    },
    {
      title: "Agent Services",
      desc: "Agents can top-up money for users and assist with transactions.",
      icon: (
        <ShieldCheck
          className="w-10 h-10"
          style={{ color: "var(--primary)" }}
        />
      ),
    },
    {
      title: "Service Fees",
      desc: "For every 1000+ Taka cash-out, a fee of 20 Taka is applied. This fee is shared between the Agent and Admin.",
      icon: (
        <ShieldCheck
          className="w-10 h-10"
          style={{ color: "var(--primary)" }}
        />
      ),
    },
  ];

  return (
    <>
      <div className="bg-background text-foreground min-h-screen pt-24 px-6">
        <section className="max-w-6xl mx-auto py-16">
          {/* Header */}
          <h1
            className="text-4xl font-bold text-center mb-12 animate-fadeIn"
            style={{ color: "var(--primary)" }}
          >
            Features
          </h1>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-card text-card-foreground p-6 rounded-xl shadow hover:shadow-xl hover:bg-secondary transition-transform transform hover:-translate-y-2 duration-300"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
