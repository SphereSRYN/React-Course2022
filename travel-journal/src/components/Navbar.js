// import React from "react";

// function Navbar() {
//   return <h4>my travel journal</h4>;
// }

// export default Navbar;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import "../css/navBar.css";

export default function Navbar() {
  return (
    <div className="navBar">
      <FontAwesomeIcon icon={faEarthAmerica} className="earth" />
      my travel journal
    </div>
  );
}
