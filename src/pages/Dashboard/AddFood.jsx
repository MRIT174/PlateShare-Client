import React, { useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddFood = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const newFood = {
      foodName: form.foodName.value,
      foodImage: form.foodImage.value,
      foodQuantity: form.foodQuantity.value,
      pickupLocation: form.pickupLocation.value,
      expireDate: form.expireDate.value,
      additionalNotes: form.additionalNotes.value,
      food_status: "Available",
      donatorName: user?.displayName,
      donatorEmail: user?.email,
      donatorImage: user?.photoURL,
      createdAt: new Date(),
    };

    try {
      const token = localStorage.getItem("token");

      const res = await fetch("https://plate-share-server-pearl.vercel.app/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newFood),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to add food");
      }

      const data = await res.json();
      if (data.insertedId || data.acknowledged) {
        Swal.fire("Success!", "Food added successfully!", "success");
        form.reset();
      } else {
        Swal.fire("Error", "Failed to add food.", "error");
      }
    } catch (err) {
      console.error("Error:", err);
      Swal.fire("Error", err.message || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center bg-base-200">
      <div className="py-10 px-5 lg:px-16 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Add New Food
        </h2>
        <form onSubmit={handleAddFood} className="max-w-3xl mx-auto grid gap-4">
          <input
            name="foodName"
            required
            placeholder="Food Name"
            className="input input-bordered"
          />
          <input
            name="foodImage"
            required
            placeholder="Food Image URL (Image link)"
            className="input input-bordered"
          />
          <input
            name="foodQuantity"
            required
            placeholder="Food Quantity (e.g., Serves 2 people)"
            className="input input-bordered"
          />
          <input
            name="pickupLocation"
            required
            placeholder="Pickup Location"
            className="input input-bordered"
          />
          <input
            type="date"
            name="expireDate"
            required
            className="input input-bordered"
          />
          <textarea
            name="additionalNotes"
            placeholder="Additional Notes"
            className="textarea textarea-bordered"
          ></textarea>

          <button
            disabled={loading}
            type="submit"
            className="btn bg-primary text-white mt-4"
          >
            {loading ? "Adding..." : "Add Food"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddFood;
