import React from "react";

export default function Contact() {
  return (
    <section>
      <div className="px-8 md:px-12 max-w-6xl mx-auto py-32 2xl:max-w-7xl items-center lg:h-screen flex flex-col justify-center">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-black font-serif text-4xl lg:text-8xl uppercase font-semibold">
            Get in contact
          </p>
        </div>
        <form className="flex flex-col max-w-xl mx-auto mt-12 w-full">
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="sr-only">
                Your name
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Your email"
                aria-placeholder="Your email"
                autoComplete="given-name"
                className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">
                Company name
              </label>
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Company name"
                aria-placeholder="Company name"
                className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required=""
                className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                placeholder="Your phone"
                aria-placeholder="Your phone"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required=""
                className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                placeholder="Your email"
                aria-placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                your message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message ( optional )"
                aria-placeholder="Your message ( optional )"
                required=""
                className="block w-full appearance-none border border-transparent bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
              ></textarea>
            </div>
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="inline-flex justify-center py-1 px-6 h-10 items-center text-sm font-medium tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600 w-full"
            >
              Contact us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
