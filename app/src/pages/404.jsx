import React from "react";
import Image404 from "@/assets/404.png";

export default function Page404() {
  return (
    <main className="grow">
      <section>
        <div className="px-8 md:px-12 mx-auto py-36 2xl:max-w-7xl bg-wood-600">
          <div className="relative w-full lg:pt-36 ">
            <div className="absolute inset-0 w-full">
              <img
                className="object--cover w--full h-full aspect--video float-right"
                src={Image404}
                alt=""
              />
            </div>
            <div className="max-w-6xl p-4 md:p-10 mx-auto 2xl:max-w-7xl relative lg:mt-24">
              <div className="max-w-xl p-4 sm:p-8 lg:p-10 lg:-mb-[4.5rem] bg-wood-100 text-balance">
                <div className="w-full">
                  <h1 className="font-serif text-4xl font-bold uppercase lg:text-5xl text-black">
                    404 We lost that page fam...
                  </h1>
                  <p className="mt-4 text-lg text-black">
                    Sorry the page you are looking for doesn't exist or has
                    moved. Go to our sitemap
                  </p>
                </div>
                <div className="flex gap-3 mt-6">
                  <a
                    className="inline-flex justify-center py-1 px-6 h-10 items-center text-sm font-medium tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600"
                    href="/"
                  >
                    <span>Back to Home Page</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
