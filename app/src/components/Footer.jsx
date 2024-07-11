import React from "react";

export default function Footer() {
  return (
    <footer className="border-t bg-wood-500">
      <div className="px-8 md:px-12 max-w-6xl mx-auto py-12 2xl:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-24">
          <span className="font-bold font-serif text-black lg:text-9xl text-2xl">
            LooBlog.
          </span>
          <nav className="flex-col flex justify-between gap-2 text-black md:ml-auto">
            <a
              href="/blogs"
              title="Blogs page"
              className="hover:text-salmon-600 duration-300"
            >
              <span className="relative z-10">Blogs</span>
            </a>
            <a
              href="/contact"
              title="Contact"
              className="hover:text-salmon-600 duration-300"
            >
              <span className="relative z-10">Contact</span>
            </a>
            <a
              href="/login"
              title="Login"
              className="hover:text-salmon-600 duration-300"
            >
              <span className="relative z-10">Login</span>
            </a>
            <a
              href="https://linkedin.com/in/mrsbs"
              title="Social Link"
              className="hover:text-salmon-600 duration-300"
            >
              <span className="relative z-10">Social link</span>
            </a>
          </nav>
        </div>
        <div className="flex flex justify-between border-t pt-12 mt-12">
          <p className="text-slate-500 text-sm font-medium">
            © 2024 LooBlog. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm font-medium">
            Made with ❤️ and <b>React.js</b>
          </p>
        </div>
      </div>
    </footer>
  );
}
