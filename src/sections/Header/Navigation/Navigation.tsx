import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.sass";
import { ReactComponent as LogoIcon } from "../../../img/logo.svg";
import SearchInput from "../../../components/Inputs/SearchInput";
import LikeCount from "../../../components/LikeCount/LikeCount";
import CartCount from "../../../components/CartCoun/CartCount";

const Navigation: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleQuery = (value: string) => {
    setQuery(value);
  };

  return (
    <div className="navigation">
      <div className="container navigation__container">
        <div className="navigation__left">
          <Link to="home" className="navigation__logo">
            <LogoIcon />
          </Link>
          <ul className="list-reset navigation__menu">
            <li className="navigation__menu-item">Women</li>
            <li className="navigation__menu-item">Men</li>
            <li className="navigation__menu-item">Girls</li>
            <li className="navigation__menu-item">Boys</li>
            <li className="navigation__menu-item">Sale</li>
          </ul>
        </div>
        <div className="navigation__right">
          <SearchInput
            className="navigation__searh"
            placeholder="Search for products..."
            sendValue={handleQuery}
          />
          <div className="navigation__interaction">
            <div className="navigation__interaction_divider">
              <LikeCount />
            </div>
            <CartCount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
