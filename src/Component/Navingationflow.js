import React, { useEffect, useState } from "react";
import { getMessage } from "../service/getMessage";

const Navigationflow = () => {
  const [message, setMessage] = useState("");
  const getNaviGationmessage = async () => {
    const res = await getMessage();
    console.log(res, "res");

    if (res) {
      res.map((val) => {
        setMessage(val.message);
      });
    }
  };

  useEffect(() => {
    getNaviGationmessage();
  }, []);

  return (
    // <div className="navigation-button-container">
    //   <div className="container">
    //     <marquee>
    //       <h2>{message}</h2>
    //     </marquee>
    //   </div>
    // </div>
    <div></div>
  );
};

export default Navigationflow;