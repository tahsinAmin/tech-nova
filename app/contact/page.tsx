export default function Contact() {
  return (
    <>
      <div className="section-hero layout-contact flex-1 bg-zinc-50 font-sans dark:bg-black container">
        <h1>Need some assistance or curious about who we are?</h1>
        <div className="small-text">Send us a messsage</div>
        <form action="/contact" className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            required
            placeholder="So, what's your name?"
            className="w-full px-2 py-2 bg-transparent border-0 border-b border-gray-800 focus:outline-none focus:ring-0 font-medium placeholder:font-medium placeholder:text-black"
          />
          <input
            required
            type="email"
            placeholder="What's your email?"
            className="w-full px-2 py-2 bg-transparent border-0 border-b border-gray-800 focus:outline-none focus:ring-0 font-medium placeholder:font-medium placeholder:text-black"
          />
          <input
            required
            type="text"
            placeholder="What's your message?"
            className="w-full px-2 py-2 bg-transparent border-0 border-b border-gray-800 focus:outline-none focus:ring-0 font-medium placeholder:font-medium placeholder:text-black"
          />
          <button
            type="submit"
            className="cta"
          >
            Send
          </button>

        </form>
        <div className="text-center py-[16px]">or</div>
        <button
          type="submit"
          className="cta"
        >
          Book a call
        </button>
      </div>
    </>
  );
}
