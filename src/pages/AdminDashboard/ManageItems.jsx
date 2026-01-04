import React from "react";

const ManageItems = () => {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "15px" }}>Manage Items</h1>
      <p>Here, admin can view, add, edit or delete items.</p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ background: "#e5e7eb" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Category</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Price</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>1</td>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>Pizza</td>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>Food</td>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>$12</td>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>
              <button style={{ marginRight: "5px" }}>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>2</td>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>Burger</td>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>Food</td>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>$8</td>
            <td style={{ padding: "10px", border: "1px solid #ccc" }}>
              <button style={{ marginRight: "5px" }}>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
