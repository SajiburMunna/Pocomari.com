/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./AdminAllUsers.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { requestUserList } from "../../store/action/userAction";
import { useEffect } from "react";
import { useState } from "react";

const AdminAllUsers = () => {
  // const navigate = useNavigate();
  // const go = () => {
  //   navigate("/orders", { state: { name: "Sojib/Munna" } });
  // };
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.persistedStorage.currentUser);
  const { userList } = useSelector((state) => state.UserListReducer);

  useEffect(() => {
    dispatch(requestUserList(token));
  }, [token]);

  return (
    <div>
      <div>
        <h1 className="admin-addproductscategory-headline ">All products</h1>

        <table>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Role</th>
          </tr>

          {userList &&
            userList.map((ur) => (
              <tr key={ur._id}>
                <td>{ur.username}</td>
                <td>{ur.email}</td>
                <td
                  className={`${
                    ur.role === "user" ? "user-color" : "admin-color"
                  } `}
                >
                  {ur.role}
                </td>

                <td></td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default AdminAllUsers;
