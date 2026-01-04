import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plate-share-server-pearl.vercel.app/foods")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch foods");
        return res.json();
      })
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching foods:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold text-primary">
        Loading Available Foods...
      </div>
    );
  }

  if (foods.length === 0) {
    return (
      <div className="text-center py-20 text-lg font-semibold text-gray-500">
        No food data available yet.
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-base-200">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-primary">
        Available Foods ({foods.length})
      </h2>

      {/* ✅ Mobile 2 cards, tablet 3, desktop 5 */}
      <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {foods.map((food) => (
          <div
            key={food._id}
            className="group bg-base-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative">
              <img
                src={food.foodImage || "https://via.placeholder.com/400x250?text=No+Image"}
                alt={food.foodName || "Unnamed Food"}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-lg shadow-lg">
                {food.status === "donated" ? "Donated" : "Available"}
              </span>
            </div>

            <div className="p-3 sm:p-4 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 line-clamp-1">
                {food.foodName || "Unnamed Food"}
              </h3>

              <p className="text-sm text-gray-600 mb-1">
                Qty: {food.foodQuantity || "N/A"}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Pickup: {food.pickupLocation || "N/A"}
              </p>
              <p className="text-xs text-gray-400 mb-3 sm:mb-4">
                Expires: {food.expireDate ? new Date(food.expireDate).toLocaleDateString() : "N/A"}
              </p>

              <Link
                to={`/FoodDetails/${food._id}`}
                className="btn btn-sm bg-primary text-white mt-auto hover:bg-primary/90 w-full"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableFoods;
