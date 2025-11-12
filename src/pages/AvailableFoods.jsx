import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch foods");
        return res.json();
      })
      .then((data) => {
        console.log("Loaded Foods:", data);
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
    <section className="py-10 px-5 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Available Foods ({foods.length})
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <div
            key={food._id}
            className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition"
          >
            <figure>
              <img
                src={food.foodImage || "https://via.placeholder.com/400x250?text=No+Image"}
                alt={food.foodName || "No Name"}
                className="w-full h-48 object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="text-xl font-semibold">
                {food.foodName || "Unnamed Food"}
              </h3>
              <p className="text-gray-600">
                {food.foodQuantity || "Quantity not mentioned"}
              </p>
              <p className="text-sm text-gray-500">
                Pickup: {food.pickupLocation || "Not provided"}
              </p>
              <p className="text-sm text-gray-500">
                Expire Date: {food.expireDate || "N/A"}
              </p>

              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/foods/${food._id}`}
                  className="btn btn-sm bg-primary text-white hover:bg-primary/90"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableFoods;
