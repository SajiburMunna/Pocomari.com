import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const Pagination1 = ({ postsPerPage, totalPosts, paginate, pageCount }) => {
  const [val, setVal] = useState(1);

  const handleChange = (e, v) => {
    paginate(v);
    setVal(v);
  };
  return (
    <div s>
      <Stack spacing={2}>
        <Pagination
          color="primary"
          size="large"
          count={pageCount}
          page={val}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default Pagination1;
