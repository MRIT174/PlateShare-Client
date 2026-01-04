import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [formData, setFormData] = useState({
    foodName: "",
    foodQuantity: "",
    expireDate: "",
  });

  useEffect(() => {
    if (user?.email) {
      fetch(`https://plate-share-server-pearl.vercel.app/foods`)
        .then((res) => res.json())
        .then((data) => {
          const mine = data.filter((f) => f.donatorEmail === user.email);
          setFoods(mine);
        });
    }
  }, [user]);

  const openUpdateModal = (food) => {
    setEditingFood(food);
    setFormData({
      foodName: food.foodName,
      foodQuantity: food.foodQuantity,
      expireDate: food.expireDate,
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://plate-share-server-pearl.vercel.app/foods/${editingFood._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Updated!", "Food updated successfully!", "success");

        // Update UI instantly
        setFoods((prev) =>
          prev.map((f) =>
            f._id === editingFood._id ? { ...f, ...formData } : f
          )
        );

        setShowModal(false);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this food?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plate-share-server-pearl.vercel.app/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setFoods(foods.filter((f) => f._id !== id));
            Swal.fire("Deleted!", "Your food has been deleted.", "success");
          });
      }
    });
  };

  return (
    <section className="py-10 px-5 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Manage My Foods
      </h2>

      {foods.length === 0 ? (
        <p className="text-center text-gray-500">No foods added yet.</p>
      ) : (
        <table className="table w-full border">
          <thead>
            <tr>
              <th>Food</th>
              <th>Quantity</th>
              <th>Expire Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((f) => (
              <tr key={f._id}>
                <td>{f.foodName}</td>
                <td>{f.foodQuantity}</td>
                <td>{f.expireDate}</td>
                <td>
                  <button
                    onClick={() => openUpdateModal(f)}
                    className="btn btn-sm bg-green-500 text-white mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(f._id)}
                    className="btn btn-sm bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
              Update Food
            </h3>

            <form onSubmit={handleUpdateSubmit} className="grid gap-3">
              <input
                type="text"
                name="foodName"
                value={formData.foodName}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
              <input
                type="text"
                name="foodQuantity"
                value={formData.foodQuantity}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
              <input
                type="date"
                name="expireDate"
                value={formData.expireDate}
                onChange={handleChange}
                className="input input-bordered"
                required
              />

              <button
                type="submit"
                className="btn bg-green-600 text-white mt-3"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageMyFoods;
