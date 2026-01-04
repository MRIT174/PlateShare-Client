import React from "react";
import { FaHandsHelping, FaLeaf, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About PlateShare
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            PlateShare is a platform dedicated to reducing food waste by
            connecting donors and receivers. We aim to spread kindness and
            build stronger communities.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
            <FaHandsHelping className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">
              Connect with local people to donate or receive food efficiently.
            </p>
          </div>

          <div className="bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
            <FaLeaf className="text-4xl text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Sustainable Impact</h3>
            <p className="text-gray-600">
              Reduce food waste and contribute to a healthier, sustainable
              environment.
            </p>
          </div>

          <div className="bg-base-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col items-center">
            <FaUsers className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">User Friendly</h3>
            <p className="text-gray-600">
              Simple, intuitive, and fast platform for both donors and receivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
