import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 px-6">
      <section className="max-w-4xl mx-auto py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold animate-fadeIn"
            style={{ color: "var(--primary)" }}
          >
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? Fill out the form below and our team
            will get back to you shortly.
          </p>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-card text-card-foreground border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-card text-card-foreground border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                className="w-full p-3 rounded bg-card text-card-foreground border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full text-primary-foreground border-sky-500 bg-sky-500 hover:bg-sky-600 transition-colors"
            >
              Send Message
            </Button>
          </form>
        ) : (
          <div className="bg-card text-card-foreground p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl mb-2">✅ Thank you!</div>
            <p className="text-muted-foreground">
              Your inquiry has been submitted successfully. We'll be in touch
              soon.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
