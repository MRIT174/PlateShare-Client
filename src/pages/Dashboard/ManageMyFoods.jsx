// pages/Dashboard/ManageMyFoods.jsx
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentFood, setCurrentFood] = useState(null);
  const [formData, setFormData] = useState({
    foodName: "",
    foodQuantity: "",
    pickupLocation: "",
    expireDate: "",
    additionalNotes: "",
  });

  // Fetch foods added by user
  const fetchFoods = async () => {
    try {
      const res = await axios.get(
        `https://plate-share-server-pearl.vercel.app/foods?donatorEmail=${user.email}`
      );
      setFoods(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // Delete food
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will delete your food item permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.delete(
          `https://plate-share-server-pearl.vercel.app/foods/${id}`
        );
        Swal.fire("Deleted!", "Food item deleted.", "success");
        fetchFoods();
      } catch (err) {
        console.error(err);
        Swal.fire("Error!", "Failed to delete.", "error");
      }
    }
  };

  // Open update modal
  const handleEdit = (food) => {
    setCurrentFood(food);
    setFormData({
      foodName: food.foodName,
      foodQuantity: food.foodQuantity,
      pickupLocation: food.pickupLocation,
      expireDate: food.expireDate,
      additionalNotes: food.additionalNotes,
    });
    setShowModal(true);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update food
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://plate-share-server-pearl.vercel.app/foods/${currentFood._id}`,
        formData
      );
      Swal.fire("Updated!", "Food item updated successfully.", "success");
      setShowModal(false);
      setCurrentFood(null);
      fetchFoods();
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to update.", "error");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Manage My Foods</h2>

      <div className="grid gap-4">
        {foods.length === 0 && (
          <p className="text-center text-gray-500">No food items added yet.</p>
        )}

        {foods.map((food) => (
          <div
            key={food._id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-base-100 rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{food.foodName}</h3>
              <p className="text-sm text-gray-600">Qty: {food.foodQuantity}</p>
              <p className="text-sm text-gray-600">
                Pickup: {food.pickupLocation}
              </p>
              <p className="text-sm text-gray-500">
                Expire: {new Date(food.expireDate).toLocaleDateString()}
              </p>
              {food.additionalNotes && (
                <p className="text-sm text-gray-400">{food.additionalNotes}</p>
              )}
            </div>

            <div className="flex gap-2 mt-3 sm:mt-0">
              <button
                onClick={() => handleEdit(food)}
                className="btn btn-sm bg-blue-600 text-white hover:bg-blue-500"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(food._id)}
                className="btn btn-sm bg-error text-white hover:bg-error/90"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-base-100 p-6 rounded-xl shadow-lg w-96 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Update Food
            </h3>
            <form className="grid gap-3" onSubmit={handleUpdate}>
              <input
                type="text"
                name="foodName"
                value={formData.foodName}
                onChange={handleChange}
                placeholder="Food Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="foodQuantity"
                value={formData.foodQuantity}
                onChange={handleChange}
                placeholder="Quantity"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Pickup Location"
                className="input input-bordered w-full"
                required
              />
              <input
                type="date"
                name="expireDate"
                value={formData.expireDate.slice(0, 10)}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Additional Notes"
                className="textarea textarea-bordered w-full"
              />
              <button
                type="submit"
                className="btn bg-primary text-white hover:bg-primary/90 mt-2 w-full"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMyFoods;
