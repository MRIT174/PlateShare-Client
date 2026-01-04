import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularListings = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plate-share-server-pearl.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        const popularFoods = data
          .filter((item) => item.foodStatus !== "Delivered")
          .slice(0, 5); // ✅ only 5 items

        setFoods(popularFoods);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="section-padding bg-base-200">
      <div className="container-main">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-primary">
            Popular Food Listings
          </h2>

          <Link
            to="/AvailableFoods"
            className="btn btn-outline btn-primary hidden md:flex"
          >
            Explore All
          </Link>
        </div>

        {/* 🔹 Skeleton Loader */}
        {loading && (
          <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="bg-base-100 rounded-2xl p-4 animate-pulse"
              >
                <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        )}

        {/* 🔹 Cards */}
        {!loading && foods.length > 0 && (
          <>
            <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {foods.map((food) => (
                <div
                  key={food._id}
                  className="bg-base-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="h-40 w-full object-cover"
                  />

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg line-clamp-1">
                      {food.foodName}
                    </h3>

                    <p className="text-sm text-gray-600">
                      Quantity: {food.foodQuantity}
                    </p>

                    <p className="text-sm text-gray-500 line-clamp-1">
                      {food.pickupLocation}
                    </p>

                    <p className="text-xs text-gray-400 mt-1 mb-4">
                      Expires: {new Date(food.expireDate).toLocaleDateString()}
                    </p>

                    <Link
                      to={`/FoodDetails/${food._id}`}
                      className="mt-auto btn btn-sm btn-primary w-full"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔹 Mobile CTA */}
            <div className="text-center mt-12 md:hidden">
              <Link to="/AvailableFoods" className="btn btn-primary px-10">
                View All Foods
              </Link>
            </div>
          </>
        )}

        {!loading && foods.length === 0 && (
          <p className="text-center text-gray-500">
            No popular foods available right now.
          </p>
        )}
      </div>
    </section>
  );
};

export default PopularListings;
