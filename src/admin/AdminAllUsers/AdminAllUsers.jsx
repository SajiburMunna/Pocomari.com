import React from "react";
import "./AdminAllUsers.css";
import { useNavigate } from "react-router-dom";

const AdminAllUsers = () => {
  const navigate = useNavigate();
  const go = () => {
    navigate("/orders", { state: { name: "Sojib/Munna" } });
  };
  return (
    <div>
      <h1>All users</h1>
      <button onClick={() => go()}>go</button>
    </div>
  );
};

export default AdminAllUsers;
