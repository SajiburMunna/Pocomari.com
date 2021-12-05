import React from "react";
import "./AdminAddProducts.css";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AdminAddProducts = () => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
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
          />
          <div className="admin-addproducts-file-categories-div">
            <div>
              <input
                style={{ width: "300px" }}
                type="file"
                id="myfile"
                name="myfile"
                required
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
                    value={category}
                    label=" category"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
            />
            <input
              style={{ width: "250px", marginLeft: "50px" }}
              type="number"
              placeholder="Products Stock"
              required
            />
          </div>

          <input
            style={{ width: "550px", height: "100px" }}
            type="text"
            placeholder="Product Description"
            required
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
