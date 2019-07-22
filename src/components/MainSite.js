import React from "react";
import "../styles/MainSite.scss";
import { NavLink } from "react-router-dom";

const MainSite = props => {
  return (
    <>
      <ul>
        <li>
          <NavLink onClick={props.handleChange} to="/debtors">
            Lista Dłużników
          </NavLink>
        </li>
        <li className="second">
          <NavLink>Twoje długi</NavLink>
        </li>
      </ul>
    </>
  );
};

export default MainSite;
