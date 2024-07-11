import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "@/utils/axiosConfig";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/register", inputs);
      navigate("/login");
      console.log(res);
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  //   console.log("logo", inputs);
  return (
    <section>
    <div className="px-8 md:px-12 max-w-6xl mx-auto py-32 2xl:max-w-7xl items-center lg:h-screen flex flex-col justify-center">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-black font-serif text-4xl lg:text-8xl uppercase font-semibold">
          Sign up
        </p>
      </div>
      <form className="flex flex-col max-w-xl mx-auto mt-12 w-full" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              aria-placeholder="Username"
              autoComplete="given-name"
              className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Your email"
              aria-placeholder="Your email"
              autoComplete="given-name"
              className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Your password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              aria-placeholder="Your password"
              autoComplete="current-password"
              className="block w-full appearance-none border border-transparent h-10 bg-wood-500  px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="inline-flex justify-center py-1 px-6 h-10 items-center font-medium tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600 w-full"
          >
            Submit
          </button>
        </div>
        {error && <p>{error}</p>}
        <div className="mt-12">
          <p className="font-medium flex leading-tight text-black mx-auto text-center">
            Already have an account?
            <a
              className="text-mist-800 hover:text-black ml-auto underline"
              href="/login"
            >
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  </section>
  );
}

export default Register;

