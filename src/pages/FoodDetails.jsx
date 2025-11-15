import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import MyFoodRequests from "./MyFoodRequests";

const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [food, setFood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    reason: "",
    contact: "",
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch(`http://localhost:5000/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((err) => console.error("Failed to load food:", err));
  }, [id, user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequestSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      foodId: food._id,
      requester_email: user.email,
      requester_name: user.displayName,
      requester_photo: user.photoURL,
      food_name: food.foodName,
      location: formData.location,
      reason: formData.reason,
      contact: formData.contact,
      status: "pending",
    };

    try {
      await axios.post("http://localhost:5000/requests", requestData);

      Swal.fire({
        icon: "success",
        title: "Food Request Sent!",
        text: "Your food request was submitted successfully.",
        confirmButtonColor: "#16a34a",
      });

      setShowModal(false);
      setFormData({ location: "", reason: "", contact: "" });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  if (!food) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-5">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-80 object-cover rounded-lg"
      />
      <h2 className="text-3xl font-bold mt-5">{food.foodName}</h2>
      <p className="mt-2 text-gray-700">{food.foodQuantity}</p>
      <p className="text-gray-500">Pickup: {food.pickupLocation}</p>
      <p className="text-gray-500">Expire Date: {food.expireDate}</p>
      <p className="mt-3">{food.additionalNotes}</p>

      <div className="flex items-center gap-3 mt-5">
        <img
          src={food.donatorImage}
          alt={food.donatorName}
          className="w-10 h-10 rounded-full"
        />
        <span>{food.donatorName}</span>
      </div>

      {food.status !== "donated" && (
        <button
          onClick={() => setShowModal(true)}
          className="btn bg-green-600 text-white mt-6"
        >
          Request Food
        </button>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Request This Food
            </h3>

            <form onSubmit={handleRequestSubmit} className="grid gap-3">
              <input
                name="location"
                type="text"
                required
                placeholder="Write Location"
                value={formData.location}
                onChange={handleChange}
                className="input input-bordered"
              />

              <textarea
                name="reason"
                required
                placeholder="Why Need Food"
                value={formData.reason}
                onChange={handleChange}
                className="textarea textarea-bordered"
              ></textarea>

              <input
                name="contact"
                type="text"
                required
                placeholder="Contact No."
                value={formData.contact}
                onChange={handleChange}
                className="input input-bordered"
              />

              <button
                type="submit"
                className="btn bg-green-600 text-white mt-3"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
      {user?.email === food?.donatorEmail && (
        <MyFoodRequests foodId={food._id} />
      )}
    </div>
  );
};

export default FoodDetails;
