import React from "react";
import SidebarApp from "../components/SidebarApp";

const LayoutDefault = () => {
  return (
    <div>
      <SidebarApp />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        {/* APP HEADER */}
        <div className="body flex-grow-1 px-3">{/* APP CONTENT */}</div>
        {/* APP FOOTER */}
      </div>
    </div>
  );
};

export default LayoutDefault;
