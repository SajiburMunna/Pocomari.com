/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { requestCategoryList } from "../../store/action/categoryAction";
import { requestSingleProduct } from "../../store/action/productAction";
import { requestUpdateProduct } from "./../../store/action/productAction";
import { BASE_URL } from "./../../utils/constants";

const AdminEditProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [baseImage, setBaseImage] = useState("");
  const [isImageChanged, setIsImageChanged] = useState(false);
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({
    title: "",
    image: "",
    categoryId: "",
    price: "",
    stock: "",
    description: "",
  });

  const { categoryList } = useSelector((state) => state.categoryReducer);
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const { editProductReducer } = useSelector((state) => state);
  console.log(token);
  useEffect(() => {
    dispatch(requestCategoryList());
    dispatch(requestSingleProduct(id, token));
  }, []);

  useEffect(() => {
    setCurrentProduct({
      ...currentProduct,
      title: editProductReducer?.title,
      image: editProductReducer?.image,
      categoryId: editProductReducer?.category._id.toString(),
      price: editProductReducer?.price,
      stock: editProductReducer?.stock,
      description: editProductReducer?.description,
    });
  }, [editProductReducer, categoryList]);

  const uploadProductImage = async (e) => {
    setIsImageChanged(true);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    setCurrentProduct({ ...currentProduct, image: base64 });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  // const setEditedCurrentProduct = (key, e) => {
  //   setCurrentProduct({ ...currentProduct, [key]: e.target.value });
  // };

  const setEditedCurrentProduct = (e, key) => {
    setCurrentProduct({ ...currentProduct, [key]: e.target.value });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(requestUpdateProduct(id, currentProduct, isImageChanged, token));
    console.log(currentProduct.categoryId.toString());
    navigate("/allproducts");
  };

  return (
    <div>
      <div>
        <h1 className="admin-addproducts-headline ">EDIT products</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ textAlign: "center" }}
            src={
              isImageChanged ? baseImage : `${BASE_URL}${currentProduct?.image}`
            }
            height="100px"
            width="100"
            alt=""
          />
        </div>
        <form onSubmit={handleUpdateProduct} action="">
          <div style={{ textAlign: "center" }}>
            <input
              style={{ width: "550px", marginBottom: "20px" }}
              type="text"
              placeholder="Products Title"
              required
              onChange={(e) => setEditedCurrentProduct(e, "title")}
              value={currentProduct.title}
            />
            <div className="admin-addproducts-file-categories-div">
              <div>
                <input
                  style={{ width: "300px" }}
                  type="file"
                  id="myfile"
                  name="myfile"
                  onChange={(e) => uploadProductImage(e)}
                ></input>
              </div>
              <div>
                <Box style={{ width: "200px", marginLeft: "50px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label=" category"
                      required
                      onChange={(e) =>
                        setCurrentProduct({
                          ...currentProduct,
                          categoryId: e.target.value,
                        })
                      }
                      value={currentProduct.categoryId}
                    >
                      {categoryList.map((ctg) => (
                        <MenuItem key={ctg._id} value={ctg._id}>
                          {ctg.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
            <div className="admin-addproducts-file-categories-div">
              <input
                style={{ width: "250px" }}
                type="number"
                placeholder="Products Price"
                required
                onChange={(e) => setEditedCurrentProduct(e, "price")}
                value={currentProduct.price}
              />
              <input
                style={{ width: "250px", marginLeft: "50px" }}
                type="number"
                placeholder="Products Stock"
                required
                onChange={(e) => setEditedCurrentProduct(e, "stock")}
                value={currentProduct.stock}
              />
            </div>

            <input
              style={{ width: "550px", height: "100px" }}
              type="text"
              placeholder="Product Description"
              required
              onChange={(e) => setEditedCurrentProduct(e, "description")}
              value={currentProduct.description}
            />
            <br />
            <input
              style={{ width: "550px", marginBottom: "20px" }}
              type="submit"
              value="ADD PRODUCTS"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEditProducts;
