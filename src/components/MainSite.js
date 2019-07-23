import React from "react";
import "../styles/MainSite.scss";
import { NavLink } from "react-router-dom";

const MainSite = props => {
  return (
    <>
      <ul className="mainUl">
        <li>
          <NavLink onClick={props.handlePageChange} to="/debtors">
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
