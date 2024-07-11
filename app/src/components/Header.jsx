import React from "react";
import { useAuthContext } from "@/context/authContext";
import UserProfile from "./UserProfile";

export default function Header() {
  const { currentUser } = useAuthContext();
  return (
    <header>
      <div className="mx-auto w-full justify-center fixed z-50 bg-wood-100 duration-50">
        <div className="mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between px-8 py-3 md:px-12 max-w-6xl 2xl:max-w-7xl">
          <div className="items-center flex justify-between flex-row">
            <a
              href="/"
              title="link to your page"
              className="items-center font-bold inline-flex text-black font-serif text-2xl"
            >
              LooBlog
            </a>
            <button className="focus:outline-none focus:shadow-outline md:hidden">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="inline-flex"
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <path
                  className="hidden"
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="flex-col items-center flex-grow hidden lg:flex lg:flex-row gap-3 lg:gap-6 lg:justify-start text-black">
            <a
              href="/blogs"
              title="Blogs"
              className="hover:text-salmon-600 lg:ml-auto"
            >
              Blogs
            </a>
            <a
              href="/categories"
              title="Categories"
              className="hover:text-salmon-600"
            >
              Categories
            </a>
            {!currentUser ? (
              <a
                href="/login"
                title="Login"
                className="inline-flex justify-center py-1 px-6 h-10 items-center font-medium tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600"
              >
                Login
              </a>
            ) : (
              <a
                href="/create"
                title="Create a new blog"
                className="inline-flex justify-center py-1 px-6 h-10 items-center font-medium tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                &nbsp; Add new
              </a>
            )}

            <UserProfile />
          </nav>
        </div>
      </div>
    </header>
  );
}
