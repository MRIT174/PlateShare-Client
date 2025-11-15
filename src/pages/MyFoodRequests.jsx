import React, { useEffect, useState } from "react";
import axios from "axios";

const MyFoodRequests = ({ foodId }) => {
  const [requests, setRequests] = useState([]);

  const loadRequests = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/requests?foodId=${foodId}`
      );
      setRequests(res.data || []);
    } catch (error) {
      console.error("Failed to load requests:", error);
    }
  };

  useEffect(() => {
    if (foodId) loadRequests();
  }, [foodId]);

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/requests/${id}`, { status });
      loadRequests();
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Food Requests</h2>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Location</th>
              <th>Reason</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="7" className="py-4 text-center">
                  No Requests Found
                </td>
              </tr>
            ) : (
              requests.map((req, i) => (
                <tr key={req._id}>
                  <td>{i + 1}</td>
                  <td>{req.requester_name}</td>
                  <td>{req.location}</td>
                  <td>{req.reason}</td>
                  <td>{req.contact}</td>
                  <td className="capitalize font-semibold">{req.status}</td>

                  <td className="flex gap-2">
                    <button
                      disabled={req.status !== "pending"}
                      onClick={() => updateStatus(req._id, "accepted")}
                      className="btn btn-xs bg-green-600 text-white disabled:bg-gray-400"
                    >
                      Accept
                    </button>

                    <button
                      disabled={req.status !== "pending"}
                      onClick={() => updateStatus(req._id, "rejected")}
                      className="btn btn-xs bg-red-600 text-white disabled:bg-gray-400"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoodRequests;
