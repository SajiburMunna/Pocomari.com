/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./AdminCategories.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  requestAddNewCategory,
  requestCategoryList,
  requestDeleteCategory,
  requestSingleCategory,
  requestUpdateCategory,
} from "./../../store/action/categoryAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const AdminCategories = () => {
  const [showform, setShowForm] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });
  const [ecategory, setEcategory] = useState({
    name: "",
    description: "",
  });
  console.log(ecategory);
  const [toggle, setToggle] = useState(true);
  const [id, setId] = useState();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const { categoryList } = useSelector((state) => state.categoryReducer);
  const { name, description } = useSelector(
    (state) => state.EditCategoryReducer.categoryForEdit
  );

  useEffect(() => {
    dispatch(requestCategoryList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);
  const setCategoryValue = (key, e) => {
    setNewCategory({ ...newCategory, [key]: e.target.value });
  };
  const handleAddNewCategory = (e) => {
    e.preventDefault();
    dispatch(requestAddNewCategory(newCategory, token));
    setNewCategory({ name: "", description: "" });
  };
  const handleDeleteCategory = (id) => {
    dispatch(requestDeleteCategory(id, token));
    setEditCategory(false);
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(requestSingleCategory(id, token));
    setEcategory({ ...ecategory, name: name, description: description });
  }, [id]);
  useEffect(() => {
    setEcategory({ ...ecategory, name: name, description: description });
  }, [name, description]);

  const hadeledit = (id) => {
    setId(id);
    setEditCategory(true);
    setShowForm(false);
  };

  const handleUpdatedCategory = (e) => {
    e.preventDefault();
    dispatch(requestUpdateCategory(id, ecategory, token));
    console.log(id, ecategory, token);
    setEcategory({ name: "", description: "" });
    setEditCategory(false);
  };
  return (
    <div>
      <h1 className="admin-addproductscategory-headline ">Categories</h1>
      <div className="admin-addproductscategory-div">
        <input
          style={{ width: "550px", marginBottom: "20px" }}
          type="submit"
          value={
            showform
              ? "ADD CATEGORY"
              : editCategory
              ? "EDIT CATEGORY"
              : "CLICK FOR CATEGORY FORM"
          }
          onClick={() =>
            editCategory ? setShowForm(false) : setShowForm(true)
          }
        />
        {showform && (
          <form onSubmit={handleAddNewCategory} action="">
            <input
              style={{ width: "550px" }}
              type="text"
              placeholder="Products Categories"
              required
              onChange={(e) => setCategoryValue("name", e)}
              value={newCategory.name}
            />
            <br />
            <input
              style={{ width: "550px" }}
              type="text"
              placeholder="Category Description"
              required
              onChange={(e) => setCategoryValue("description", e)}
              value={newCategory.description}
            />
            <br />
            <input
              style={{ width: "550px", marginBottom: "20px" }}
              type="submit"
              value="SUBMIT CATEGORY"
            />
          </form>
        )}
        {editCategory && (
          <form onSubmit={handleUpdatedCategory} action="">
            <input
              style={{ width: "550px" }}
              type="text"
              placeholder="edit Categories"
              required
              onChange={(e) =>
                setEcategory({
                  ...ecategory,
                  name: e.target.value,
                })
              }
              value={ecategory.name}
            />
            <br />
            <input
              style={{ width: "550px" }}
              type="text"
              placeholder="edit Description"
              required
              onChange={(e) =>
                setEcategory({
                  ...ecategory,
                  description: e.target.value,
                })
              }
              value={ecategory.description}
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
        {categoryList.map((ctg) => (
          <tr>
            <td>{ctg.name}</td>
            <td>{ctg.description}</td>
            <td>
              <EditIcon
                onClick={() => hadeledit(ctg._id)}
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
                onClick={() => handleDeleteCategory(ctg._id)}
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
        ))}
      </table>
    </div>
  );
};

export default AdminCategories;
