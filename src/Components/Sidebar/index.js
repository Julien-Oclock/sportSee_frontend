import React from "react";

import "./styles.scss";

import LOGO1 from "../../assets/images/icon-sidebar1.png";
import LOGO2 from "../../assets/images/icon-sidebar2.png";
import LOGO3 from "../../assets/images/icon-sidebar3.png";
import LOGO4 from "../../assets/images/icon-sidebar4.png";

/**
 * Component used to display the sidebar
 * @component
 * @returns {JSX} - the JSX of the Sidebar component
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo-container">
        <div className="sidebar__logo-item">
          <img src={LOGO1} alt="logo" />
        </div>
        <div className="sidebar__logo-item">
          <img src={LOGO2} alt="logo" />
        </div>
        <div className="sidebar__logo-item">
          <img src={LOGO3} alt="logo" />
        </div>
        <div className="sidebar__logo-item">
          <img src={LOGO4} alt="logo" />
        </div>
      </div>
      <p className="sidebar__text">Copyright, SportSee 2020</p>
    </div>
  );
};

export default Sidebar;
