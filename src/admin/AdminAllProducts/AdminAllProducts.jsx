/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "./AdminAllProducts.css";
import { useSelector, useDispatch } from "react-redux";
import {
  requestDeleteProduct,
  requestProductList,
} from "./../../store/action/productAction";

import { BASE_URL } from "./../../utils/constants";
import { useNavigate } from "react-router-dom";

const AdminAllProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pd, setPd] = useState([]);
  const { productListReducer } = useSelector((state) => state);

  const [reload, setReload] = useState(false);
  const { token, role, username, email } = useSelector(
    (state) => state.persistedStorage.currentUser
  );
  console.log(role, username, email);
  useEffect(() => {
    dispatch(requestProductList(token));
  }, [reload]);
  const goForEdit = (id) => {
    navigate(`/product/edit/${id}`);
  };

  return (
    <div>
      <h1 className="admin-addproductscategory-headline ">All products</h1>

      <table>
        <tr>
          <th>Product Image</th>
          <th>ProductName</th>
          <th>ProductCategory</th>
          <th>ProductPrice</th>
          <th>ProductStock</th>
          <th>Action</th>
        </tr>

        {productListReducer &&
          productListReducer.map((pd) => (
            <tr key={pd._id}>
              <td>
                <img
                  src={BASE_URL + pd.image}
                  width="100px"
                  height="100px"
                  alt=""
                />
              </td>
              <td>{pd.title}</td>
              <td>{pd.category.name}</td>
              <td>{pd.price}</td>
              <td>{pd.stock}</td>
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
                  onClick={() => goForEdit(pd._id)}
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
                  onClick={() => dispatch(requestDeleteProduct(pd._id, token))}
                />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default AdminAllProducts;
