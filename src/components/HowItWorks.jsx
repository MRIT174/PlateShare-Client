import React from "react";

const HowItWorks = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <p className="text-gray-600 mb-12">
            PlateShare makes food sharing simple and meaningful. Here's how you
            can help the community:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-2">1. Post Food</h3>
              <p className="text-gray-700">
                Have extra food? Simply upload details and make it available for
                those in need.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-2">2. Find Food</h3>
              <p className="text-gray-700">
                Browse available food items shared by the community and request
                what you need.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-semibold mb-2">3. Collect Food</h3>
              <p className="text-gray-700">
                Once your request is accepted, collect the food from the donor
                safely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
