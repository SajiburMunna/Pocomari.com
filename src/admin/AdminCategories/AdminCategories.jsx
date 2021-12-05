import React, { useState } from "react";
import "./AdminCategories.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminCategories = () => {
  const [showform, setShowForm] = useState(false);
  return (
    <div>
      <h1 className="admin-addproductscategory-headline ">Categories</h1>
      <div className="admin-addproductscategory-div">
        <input
          style={{ width: "550px", marginBottom: "20px" }}
          type="submit"
          value={showform ? "ADD CATEGORY" : "CLICK FOR CATEGORY FORM"}
          onClick={() => setShowForm(true)}
        />
        {showform && (
          <form onSubmit={() => setShowForm(true)} action="">
            <input
              style={{ width: "550px" }}
              type="text"
              placeholder="Products Categories"
              required
            />
            <br />
            <input
              style={{ width: "550px" }}
              type="text"
              placeholder="Category Description"
              required
            />
            <br />
            <input
              style={{ width: "550px", marginBottom: "20px" }}
              type="submit"
              value="SUBMIT CATEGORY"
            />
          </form>
        )}
      </div>
      <h1 className="admin-addproductscategory-headline ">Category List</h1>

      <table>
        <tr>
          <th>Category Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>
            <EditIcon
              fontSize="large"
              style={{
                backgroundColor: "  rgb(61, 209, 61)",
                color: "white",
                padding: "5px",
                cursor: "pointer",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            />
            <DeleteIcon
              fontSize="large"
              style={{
                backgroundColor: "   rgb(238, 30, 30)",
                color: "white",
                padding: "5px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>Adam</td>
          <td>Johnson</td>
          <td>67</td>
        </tr>
      </table>
    </div>
  );
};

export default AdminCategories;
