import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/foods`)
        .then((res) => res.json())
        .then((data) => {
          const mine = data.filter((f) => f.donatorEmail === user.email);
          setFoods(mine);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this food?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
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
                  <button className="btn btn-sm bg-green-500 text-white mr-2">
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
    </section>
  );
};

export default ManageMyFoods;
