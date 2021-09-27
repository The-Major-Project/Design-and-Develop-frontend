import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const DashBoard = () => {
  const history = useHistory();

  //   VERIFIYING FOR THE ACCESS TO THIS PAGE
  const verifyDashboard = async () => {
    try {
      const res = await axios.get("/dashboard", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          accessToken: localStorage.getItem("accessToken"),
        },
        credentials: "include",
        withCredentials: true,
      });

      console.log("res" + res);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  // USING THIS EFFECT HOOK FOR JWT VERIFICATION
  useEffect(() => {
    verifyDashboard();
  }, []);

  return (
    <div>
      <form method="get">This is user dashboard</form>
    </div>
  );
};

export default DashBoard;
