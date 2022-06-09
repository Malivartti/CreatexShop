import React, { useState } from "react";
import "./index.sass";
import TopBar from "./TopBar/TopBar";
import Navigation from "./Navigation/Navigation";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import Megamenu from "./Megamenu/Megamenu";

const Header: React.FC = () => {
  const [selectedСategory, setSelectedCategory] = useState<null | string>(null);

  return (
    <div className="header">
      <TopBar />
      <Navigation
        selectedСategory={selectedСategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Megamenu
        isShow={selectedСategory}
        closeMenu={() => setSelectedCategory(null)}
      />
      <SpecialOffers />
    </div>
  );
};

export default Header;
