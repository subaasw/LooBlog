import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "@/context/authContext";

export default function PasswordReset() {
  const { currentUser } = useAuthContext();
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!currentUser?.id) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="grow">
      <section>
        <div className="px-8 md:px-12 max-w-6xl mx-auto py-32 2xl:max-w-7xl items-center lg:h-screen flex flex-col justify-center">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-black font-serif text-4xl lg:text-8xl uppercase font-semibold">
              Reset
            </p>
          </div>
          <form
            className="flex flex-col max-w-xl mx-auto mt-12 w-full"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <div>
                <label htmlFor="currentPassword" className="sr-only">
                  Current password
                </label>
                <input
                  id="currentPassword"
                  name="password"
                  type="password"
                  placeholder="Current password"
                  aria-placeholder="Current Password"
                  className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="sr-only">
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="password"
                  type="password"
                  placeholder="New password"
                  aria-placeholder="New password"
                  className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                  required
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  aria-placeholder="Confirm Password"
                  className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-3">
              <button
                type="submit"
                className="inline-flex justify-center py-1 px-6 h-10 items-center text-sm font-medium tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600 w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
