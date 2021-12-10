import React, { useState, useEffect } from "react";
import "./AdminAddProducts.css";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { requestCategoryList } from "../../store/action/categoryAction";
import { requestAddNewProduct } from "../../store/action/productAction";
import { useNavigate } from "react-router-dom";

const AdminAddProducts = () => {
  const navigate = useNavigate();

  const { categoryList } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [productInfo, setProductInfo] = useState({
    title: "",
    image: "",
    categoryId: "",
    price: "",
    stock: "",
    description: "",
  });
  console.log(productInfo);

  const [baseImage, setBaseImage] = useState("");
  const [isImageChanged, setIsImageChanged] = useState(false);
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  useEffect(() => {
    dispatch(requestCategoryList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);
  const setPrductInfoValue = (key, e) => {
    e.preventDefault();
    setProductInfo({ ...productInfo, [key]: e.target.value });
  };

  useEffect(() => {
    setProductInfo({
      ...productInfo,
      categoryId: categoryList[0]?._id,
    });
  }, [categoryList]);

  const uploadProductImage = async (e) => {
    setIsImageChanged(true);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    setProductInfo({ ...productInfo, image: base64 });
    setToggle(false);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };
  const requestAddProduct = (e) => {
    e.preventDefault();
    dispatch(requestAddNewProduct(productInfo, token));
    navigate("/allproducts");
  };
  return (
    <div>
      <h1 className="admin-addproducts-headline ">Add products</h1>
      {isImageChanged && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ textAlign: "center" }}
            src={isImageChanged ? baseImage : null}
            height="100px"
            width="100"
            alt=""
          />
        </div>
      )}

      <form onSubmit={requestAddProduct} action="">
        <div style={{ textAlign: "center" }}>
          <input
            style={{ width: "550px", marginBottom: "20px" }}
            type="text"
            placeholder="Products Title"
            required
            onChange={(e) => setPrductInfoValue("title", e)}
            value={productInfo.title}
          />
          <div className="admin-addproducts-file-categories-div">
            <div>
              <input
                style={{ width: "300px" }}
                type="file"
                id="myfile"
                name="myfile"
                required
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
                    onChange={
                      (e) => setPrductInfoValue("categoryId", e)
                      // setProductInfo({
                      //   ...productInfo,
                      //   categoryId: e.target.value,
                      // })
                    }
                    value={productInfo._id}
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
              onChange={(e) => setPrductInfoValue("price", e)}
              value={productInfo.price}
            />
            <input
              style={{ width: "250px", marginLeft: "50px" }}
              type="number"
              placeholder="Products Stock"
              required
              onChange={(e) => setPrductInfoValue("stock", e)}
              value={productInfo.stock}
            />
          </div>

          <input
            style={{ width: "550px", height: "100px" }}
            type="text"
            placeholder="Product Description"
            required
            onChange={(e) => setPrductInfoValue("description", e)}
            value={productInfo.description}
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
  );
};

export default AdminAddProducts;
