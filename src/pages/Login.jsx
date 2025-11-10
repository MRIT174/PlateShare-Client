import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        navigate(location.state ? location.state : "/");
      })
      .catch(() => setError("Invalid email or password. Please try again."));
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google User:", result.user);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        setError("Google sign-in failed. Please try again.");
      });
  };

  return (
    <section className="flex justify-center items-center mt-6">
      <div>
        <form
          onSubmit={handleLogin}
          className="card-body bg-base-200 border-base-300 rounded-box w-96 border p-6 shadow-lg"
        >
          <legend className="text-2xl font-bold text-center mb-4">Login</legend>

          <label className="label font-semibold">Email</label>
          <input
            name="email"
            type="email"
            className="input input-bordered"
            placeholder="Enter your email"
            required
          />

          <label className="label font-semibold mt-2">Password</label>
          <input
            name="password"
            type="password"
            className="input input-bordered"
            placeholder="Enter password"
            required
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button type="submit" className="btn btn-primary mt-4 w-full">
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5] mt-3 flex gap-2 justify-center items-center"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <div className="text-center mt-3">
            <a href="#" className="link link-hover text-sm">
              Forgot password?
            </a>
          </div>

          <p className="text-center mt-3 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
