import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import MyFoodRequests from "./MyFoodRequests";
import {
  GiMeal,
  GiTakeMyMoney,
  GiCookingPot,
  GiRotaryPhone,
} from "react-icons/gi";
import { MdLocationOn, MdDateRange, MdPerson } from "react-icons/md";

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [food, setFood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    reason: "",
    contact: "",
  });

  useEffect(() => {
    fetch(`https://plate-share-server-pearl.vercel.app/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((err) => console.error("Failed to load food:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequestSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "You must log in to request this food.",
      });
      return;
    }

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
      await axios.post(
        "https://plate-share-server-pearl.vercel.app/requests",
        requestData
      );

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
    <div className="max-w-6xl mx-auto py-12 px-5">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Image */}
        <div className="md:w-1/2 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
          <img
            src={food.foodImage}
            alt={food.foodName}
            className="w-full h-full object-cover md:h-[400px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Info */}
        <div className="md:w-1/2 flex flex-col justify-between space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            {food.foodName}
          </h1>

          <div className="space-y-3">
            <p className="flex items-center gap-2 text-gray-700">
              <GiMeal className="text-green-600 text-xl" /> Quantity:{" "}
              <span className="font-semibold">{food.foodQuantity}</span>
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <MdLocationOn className="text-red-500 text-xl" /> Pickup:{" "}
              <span className="font-medium">{food.pickupLocation}</span>
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <MdDateRange className="text-blue-500 text-xl" /> Expire Date:{" "}
              <span className="font-medium">
                {new Date(food.expireDate).toLocaleDateString()}
              </span>
            </p>

            {food.additionalNotes && (
              <p className="flex items-start gap-2 text-gray-600">
                <GiCookingPot className="text-yellow-500 text-xl mt-1" />{" "}
                {food.additionalNotes}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 mt-6">
            <img
              src={food.donatorImage}
              alt={food.donatorName}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary"
            />
            <span className="flex items-center gap-1 font-medium text-gray-700">
              <MdPerson className="text-gray-500" /> {food.donatorName}
            </span>
          </div>

          {/* Request Button */}
          {food.status !== "donated" && (
            <button
              onClick={() => setShowModal(true)}
              className="btn bg-green-600 text-white mt-6 w-full md:w-auto hover:bg-green-700 transition-colors"
            >
              Request Food
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Request This Food
            </h3>

            <form onSubmit={handleRequestSubmit} className="grid gap-3">
              <input
                name="location"
                type="text"
                required
                placeholder="Enter Your Location"
                value={formData.location}
                onChange={handleChange}
                className="input input-bordered w-full"
              />

              <textarea
                name="reason"
                required
                placeholder="Reason for Request"
                value={formData.reason}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
              ></textarea>

              <input
                name="contact"
                type="text"
                required
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                className="input input-bordered w-full"
              />

              <button
                type="submit"
                className="btn bg-green-600 text-white mt-3 w-full hover:bg-green-700 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Donator Requests Table */}
      {user?.email === food?.donatorEmail && (
        <MyFoodRequests foodId={food._id} />
      )}
    </div>
  );
};

export default FoodDetails;
