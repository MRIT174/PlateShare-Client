import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section
      className="relative w-full h-[520px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2023/11/01/17/27/ai-generated-8358479_1280.jpg')",
      }}
    >
      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Hero Content (Left aligned, no container-main) */}
      <div className="relative w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Share & Save Food <br />
            with <span className="text-primary">PlateShare</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            PlateShare connects food donors and receivers to reduce food waste
            and spread kindness across the community.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/AvailableFoods"
              className="btn btn-primary px-8"
            >
              Explore Foods
            </Link>

            <Link
              to="/register"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-black"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
