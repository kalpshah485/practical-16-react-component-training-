import React from "react";
import "./NavTabWithDot.scss";

const NavTabWithDot = ({ navTabItems }: { navTabItems: string[] }) => {
  return (
    <div className="navtab">
      {React.Children.toArray(
        navTabItems.map((val, ind) => (
          <div className={`nav_item${ind === 0 ? " active" : ""}`}>
            <div className="nav_text">{val}</div>
            <div className="dot"></div>
          </div>
        ))
      )}
    </div>
  );
};

export default NavTabWithDot;
