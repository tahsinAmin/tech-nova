'use client';

import { useState } from "react";

export default function Contact() {
  const [formMsg, setFormMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setFormMsg("Thanks for your message!");
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <div className="section-hero layout-contact flex-1 bg-zinc-50 font-sans dark:bg-black">
        <h1 className="sm:mb-[94px] text-[50px] font-semibold mb-[10px]">Need some assistance or curious about who we are?</h1>
        <div className="px-[4vw] lg:px-[8vw]">
          {formMsg ? null : <div className="small-text sm:mt-0">Send us a messsage</div>}
          <div className="sm:flex sm:gap-4 sm:justify-between">
            {formMsg ?
              <div className="text-center mt-[48px] mb-[15px]">Thanks for your message!</div> :
              (<form onSubmit={handleSubmit} className="form-container">
                <input
                  type="text"
                  required
                  name='username'
                  placeholder="So, what's your name?"
                  className="w-full px-2 py-2 bg-transparent border-0 border-b border-gray-800 focus:outline-none focus:ring-0 font-medium placeholder:font-medium placeholder:text-black"
                />
                <input
                  required
                  type="email"
                  name='email'
                  placeholder="What's your email?"
                  className="w-full px-2 py-2 bg-transparent border-0 border-b border-gray-800 focus:outline-none focus:ring-0 font-medium placeholder:font-medium placeholder:text-black"
                />
                <input
                  required
                  type="text"
                  name='message'
                  placeholder="What's your message?"
                  className="w-full px-2 py-2 bg-transparent border-0 border-b border-gray-800 focus:outline-none focus:ring-0 font-medium placeholder:font-medium placeholder:text-black"
                />
                <button
                  type="submit"
                  className="cta sm:w-[fit-content]"
                >
                  {loading ? "Sending..." : "Send"}
                </button>

              </form>)}

            <div className="or-book-a-call flex flex-col sm:flex-1 sm:flex-row sm:justify-end sm:items-start md:gap-4">
              <div className="text-sm text-center py-[16px]">or</div>
              <button
                type="submit"
                className="cta"
              >
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
