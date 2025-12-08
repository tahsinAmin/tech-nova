export default function Home() {
  return (
    <>
      <div className="section-hero home flex-1 bg-zinc-50 font-sans dark:bg-black">
        <h1>Need help
          <br />
          to launch?
        </h1>
        <div className="hero-bottom sm:flex sm:flex-row-reverse sm:items-end gap-4 justify-between">
          <h1 className="text-end">We make
            <br />
            it live.
          </h1>
          <p className="description">We learn from every experience by pushing the boundaries past the ordinary. Let's create best website experience, together.</p>
        </div>
      </div>
      <div className="services pageWidth">
        <h2 className="text-center text-2xl font-semibold pb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="productsBoxItem">
            <div className="productsBoxItemSmall">
              <h4>Voice</h4>
            </div>
          </div>
          <div className="productsBoxItem">
            <div className="productsBoxItemSmall">
              <h4>Messaging</h4>
            </div>
          </div>
          <div className="productsBoxItem">
            <div className="productsBoxItemSmall">
              <h4>Platform</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
