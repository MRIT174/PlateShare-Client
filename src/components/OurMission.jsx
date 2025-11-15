import React from "react";

const OurMission = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            At PlateShare, our mission is simple — reduce food waste and ensure
            no one sleeps hungry. We connect generous donors with people who
            need food, creating a sustainable and caring community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow bg-green-50">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                10,000+ Meals Shared
              </h3>
              <p className="text-gray-700">
                A growing community fighting hunger.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                1,500+ Donors
              </h3>
              <p className="text-gray-700">
                People contributing to a better world.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow bg-purple-50">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                Zero Food Wasted
              </h3>
              <p className="text-gray-700">
                We ensure food reaches the right hands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
