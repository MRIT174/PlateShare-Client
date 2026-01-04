import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async () => {
    try {
      await updateUserProfile({ displayName, photoURL });
      alert("Profile updated successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="flex items-center space-x-4 mb-4">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
            {user?.displayName?.charAt(0).toUpperCase() || "U"}
          </div>
        )}
        <div>
          <h2 className="text-xl font-semibold">{user?.displayName || "User"}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Name: </span>
          {user?.displayName || "Not set"}
        </p>
        <p>
          <span className="font-semibold">Email: </span>
          {user?.email || "Not set"}
        </p>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
      >
        Update Profile
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h2 className="text-xl font-bold mb-4">Update Profile</h2>

            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Photo URL</label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="flex justify-end space-x-3 mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                >
                  Update
                </button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
