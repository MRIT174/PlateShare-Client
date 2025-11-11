import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2023/11/01/17/27/ai-generated-8358479_1280.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative text-center text-white px-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Share & Save Food with PlateShare
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          PlateShare connects food donors and receivers to reduce food waste and
          spread kindness in the community.
        </p>

        <Link
          to="/AvailableFoods"
          className="btn bg-primary border-none text-white hover:bg-primary/90 px-6 py-3 text-lg rounded-lg"
        >
          View Details
        </Link>
      </div>
    </section>
  );
};

export default Header;
