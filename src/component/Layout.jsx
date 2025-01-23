import React, { useState } from "react";
import Home from "../pages/Home";
import "../component/Layout.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menu from "./Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container-fluid">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
