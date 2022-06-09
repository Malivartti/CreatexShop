import React from "react";
import { Link } from "react-router-dom";
import "./index.sass";
import { ReactComponent as LogoIHeart } from "../../img/icons/Basic/Heart/outline.svg";

const LikeCount = () => {
  return (
    <Link to="wishlist" className="like-count">
      <LogoIHeart className="like-count__icon" />
      <div className="like-count__count">2</div>
    </Link>
  );
};

export default LikeCount;
