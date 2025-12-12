import { Users } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="bg-background text-foreground min-h-screen pt-12 px-6">
        <section className="max-w-5xl mx-auto py-16">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center mb-8">
            About Digital Wallet Management
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-20">
            Digital Wallet Management is designed to make money transactions
            easier, safer, and faster. From secure savings to instant transfers,
            our service empowers both users and agents with seamless financial
            solutions.
          </p>

          {/* Mission Section */}
          <div className="mb-20 mx-auto">
            <h2 className="text-2xl font-semibold mb-4 ">Our Mission</h2>
            <p className="text-muted-foreground">
              Our mission is to bring secure, transparent, and user-friendly
              digital finance to everyone. We aim to build trust by offering
              reliable cash-in, cash-out, and transfer services with fair
              charges.
            </p>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-8   ">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Founder", "CTO", "Support Manager"].map((role, i) => (
                <div
                  key={i}
                  className="bg-card text-card-foreground p-6 rounded-xl shadow hover:shadow-lg hover:bg-secondary transition"
                >
                  <Users className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{role}</h3>
                  <p className="text-muted-foreground mb-12">
                    Dedicated to making financial services easier and accessible
                    for all.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
