import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FilterSixItem = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded Foods:", data);

        const sortedByExpireDate = data
          .filter((item) => item.expireDate)
          .sort((a, b) => new Date(b.expireDate) - new Date(a.expireDate))
          .slice(0, 6);

        setFoods(sortedByExpireDate);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching foods:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading Foods...
      </div>
    );
  }

  return (
    <section className="py-10 px-5 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Latest Available Foods
      </h2>

      {foods.length === 0 ? (
        <p className="text-center text-gray-500">No foods available yet.</p>
      ) : (
        <>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
              <div
                key={food._id}
                className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition"
              >
                <figure>
                  <img
                    src={
                      food.foodImage ||
                      "https://placehold.co/400x250?text=No+Image"
                    }
                    alt={food.foodName}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-xl font-semibold">{food.foodName}</h3>
                  <p className="text-gray-600">{food.foodQuantity}</p>
                  <p className="text-sm text-gray-500">
                    Pickup: {food.pickupLocation}
                  </p>
                  <p className="text-sm text-gray-500">
                    Expire Date:{" "}
                    {food.expireDate
                      ? new Date(food.expireDate).toLocaleDateString()
                      : "N/A"}
                  </p>

                  <div className="card-actions justify-end mt-4">
                    <Link
                      to={`/FoodDetails/${food._id}`}
                      className="btn btn-sm bg-primary text-white hover:bg-primary/90"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/AvailableFoods"
              className="btn bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
            >
              View All Foods
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default FilterSixItem;
