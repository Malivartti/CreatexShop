import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.sass";
import { ReactComponent as LogoIcon } from "../../../img/logo.svg";
import SearchInput from "../../../components/Inputs/SearchInput";
import LikeCount from "../../../components/LikeCount/LikeCount";
import CartCount from "../../../components/CartCoun/CartCount";

const menu = ["Women", "Men", "Girls", "Boys", "Sale"];

interface NavigationProps {
  selectedСategory: null | string;
  setSelectedCategory: (value: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  selectedСategory,
  setSelectedCategory,
}) => {
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
          <div className="navigation__menu">
            {menu.map((category) => (
              <button
                key={category}
                type="button"
                className={`btn-reset navigation__menu-item ${
                  category === selectedСategory
                    ? "navigation__menu-item_selected"
                    : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
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
