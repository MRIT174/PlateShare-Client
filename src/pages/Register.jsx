import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider.jsx";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/profile");
          })
          .catch((err) => console.error("Profile update error:", err));
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <section className="flex justify-center items-center mt-6">
      <form onSubmit={handleRegister} className="card-body w-full max-w-sm">
        <fieldset className="fieldset rounded-box p-4">
          <legend className="fieldset-legend text-center text-2xl font-bold">
            Register
          </legend>

          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Name"
            required
          />

          <label className="label">Photo URL</label>
          <input
            name="photo"
            type="url"
            className="input"
            placeholder="Photo URL"
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />

          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

          <button className="btn btn-primary mt-4 w-full">Register</button>

          <p className="text-center mt-3 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-medium">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
