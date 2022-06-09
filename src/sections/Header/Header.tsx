import React from "react";
import "./index.sass";
import TopBar from "./TopBar/TopBar";
import Navigation from "./Navigation/Navigation";
import SpecialOffers from "./SpecialOffers/SpecialOffers";

const Header: React.FC = () => {
  return (
    <div className="header">
      <TopBar />
      <Navigation />
      <SpecialOffers />
    </div>
  );
};

export default Header;
