const HeroSection = () => {
  return (
    <div>
      <section className=" lg:grid lg:place-content-center">
        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
              Manage your finances with
              <strong className="text-sky-500"> Digital Wallet </strong>
              solutions
            </h1>
            <p className="mt-4 text-base text-pretty text-muted-foreground sm:text-lg/relaxed">
              Securely store, send, and receive money anytime, anywhere. Track
              your transactions, enjoy seamless payments, and experience the
              future of digital finance with ease.
            </p>
            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-sky-500 bg-sky-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-sky-600"
                href="#"
              >
                Get Started
              </a>
              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-muted-foreground shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
