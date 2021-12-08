import React, { useState, useEffect } from "react";
import "./AdminAddProducts.css";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { requestCategoryList } from "../../store/action/categoryAction";

const AdminAddProducts = () => {
  const { categoryList } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [productInfo, setProductInfo] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    stock: "",
    description: "",
  });
  console.log(productInfo);
  useEffect(() => {
    dispatch(requestCategoryList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);
  const setPrductInfoValue = (key, e) => {
    e.preventDefault();
    setProductInfo({ ...productInfo, [key]: e.target.value });
  };
  return (
    <div>
      <h1 className="admin-addproducts-headline ">Add products</h1>
      <form action="">
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
                onChange={(e) => setPrductInfoValue("image", e)}
                value={productInfo.image}
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
                    onChange={(e) => setPrductInfoValue("category", e)}
                    value={productInfo.category}
                  >
                    {categoryList.map((ctg) => (
                      <MenuItem key={ctg._id} value={ctg.name}>
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
